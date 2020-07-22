<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>
		</div>
		<transition :name="transitionName">
			<router-view />
		</transition>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				transitionName: "slide-fade",
			};
		},
		mounted() {
			localStorage.setItem("loggedIn", false);
		},
		watch: {
			$route(to, from, params) {
				const toParam = to.params && to.params.id ? to.params.id : 0;
				this.transitionName = toParam % 2 === 0 ? "slide-left" : "slide-fade";
			},
		},
	};
</script>
<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
	/* add transition styles */
	.slide-fade-enter-active {
		transition: transform 0.3s cubic-bezier(1, 0.5, 0.8, 1),
			color 0.5s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.slide-fade-leave-active {
		transition: transform 1s cubic-bezier(1, 0.5, 0.8, 1),
			color 1s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.slide-fade-enter {
		color: mediumblue;
		transform: translateY(20px);
	}
	.slide-fade-leave-to {
		transform: translateX(100px);
		color: cyan;
	}

	.slide-left-enter-active {
		transition: transform 0.3s cubic-bezier(1, 0.5, 0.8, 1),
			color 0.5s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.slide-left-leave-active {
		transition: transform 1s cubic-bezier(1, 0.5, 0.8, 1),
			color 1s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.slide-left-enter {
		color: mediumblue;
		transform: translateY(20px);
	}
	.slide-left-leave-to {
		transform: skewY(90deg);
		color: cyan;
	}
</style>
