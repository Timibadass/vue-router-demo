<template>
	<div class="home">
		<p v-if="loading" class="post--empty">Loading....</p>
		<ol v-else>
			<!-- add this text too -->
			<p v-if="guest">Hi Guest</p>
			<li v-for="post in posts" :key="post.id">
				<router-link
					:to="{ name: 'Post', params: { id: post.id, post: post } }"
				>
					{{ post.title }}
				</router-link>
			</li>
		</ol>
	</div>
</template>

<script>
	// @ is an alias to /src
	import axios from "axios";
	export default {
		name: "Home",
		data() {
			return {
				posts: null,
				// add this property
				guest: false,
				loading: false,
			};
		},
		beforeRouteEnter(to, from, next) {
			if (to.matched.some((record) => record.meta.requiresAuth)) {
				// this route requires auth, check if logged in
				// if not, display guest greeting.
				const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));

				if (!loggedIn) {
					next((vm) => {
						vm.guest = true;
					});
				} else {
					next();
				}
			} else {
				next(); // make sure to always call next()!
			}
		},
		mounted() {
			this.getPosts();
		},
		methods: {
			async getPosts() {
				this.loading = true;
				try {
					let res = await axios({
						url: "https://jsonplaceholder.typicode.com/posts",
						method: "GET",
					});
					let posts = res.data;

					this.posts = posts;
					this.loading = false;
				} catch (error) {
					this.loading = false;
				}
			},
		},
	};
</script>
<style>
	.home {
		padding: 0 30px;
		max-width: 800px;
		margin: 0 auto;
	}

	@keyframes blink {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
	.post--empty {
		height: 250px;
		margin-top: 30px;
		animation: blink 0.8s ease-in-out infinite alternate both;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: "Lobster", cursive;
	}

	ul {
		text-align: left;
	}

	a {
		color: inherit;
	}
</style>
