<template>
	<transition name="slide-fade" mode="in-out">
		<div class="about">
			<div class="post">
				<h1>{{ post.title }}</h1>
				<p v-html="post.body"></p>
			</div>
			<p>End of page</p>
		</div>
	</transition>
</template>
<script>
	export default {
		name: "Post",
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

	.slide-fade-enter-active {
		transition: transform 2s cubic-bezier(1, 0.5, 0.8, 1), opacity 2s ease-in;
	}
	.slide-fade-leave-active {
		transition: transform 2s cubic-bezier(1, 0.5, 0.8, 1), opacity 2s ease-out;
	}
	.slide-fade-enter {
		opacity: 1;
		transform: skewY(20deg);
	}
	.slide-fade-leave-to {
		transform: skewY(-45deg);
		opacity: 0.5;
	}
</style>
