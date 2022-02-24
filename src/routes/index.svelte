<script lang="ts">
	import Search from '$lib/components/search.svelte';
	export let bgImage;
</script>

<main style="background-image: url({bgImage});">
	<Search />
</main>

<style>
	main {
		background-color: #dbeeff;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: top center;
		background-attachment: fixed;
		min-height: 100vh;
		display: grid;
		align-items: center;
	}
</style>
