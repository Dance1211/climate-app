<script lang="ts">
	import Search from '$lib/components/search.svelte';
	import Footer1 from '$lib/components/footer1Home.svelte';
	export let bgImage;
	
	import Map from '$lib/components/map.svelte';
</script>

<main>
	<div class="background-image" style="background-image: url({bgImage});" />
	<Search />
</main>
<Footer1 /> <!-- this version of the footer is for home/search page only. use v2 for 'internal' pages -->

<style>
	main {
		min-height: 100vh;
		display: grid;
		align-items: center;
	}

	.background-image {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: -50;
		background-color: #dbeeff;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: top center;
		background-attachment: fixed;
		animation: fadebackground 1.5s 1;
	}

	@keyframes fadebackground {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@-moz-keyframes fadebackground {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@-webkit-keyframes fadebackground {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@-o-keyframes fadebackground {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@-ms-keyframes fadebackground {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
