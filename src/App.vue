<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>
		</div>
		<transition name="slide-fade">
			<router-view />
		</transition>
	</div>
</template>

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
</style>
