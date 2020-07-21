<template>
	<div class="about">
		<div class="post">
			<h1>{{ post.title }}</h1>
			<p v-html="post.body"></p>
		</div>
		<p>End of page</p>
	</div>
</template>
<script>
	export default {
		name: "Post",
		data() {
			return {
				post: this.$route.post,
			};
		},
		props: ["id", "post"],
	};
</script>
<style>
	.about {
		background-color: lightpink;
	}
	.post {
		padding: 0 30px;
		height: 110vh;
		margin: 0 auto;
	}

	p {
		margin: 10px 0;
	}
</style>
