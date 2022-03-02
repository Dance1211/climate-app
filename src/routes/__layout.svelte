<script lang="ts">
	import '$lib/css/styles-basic-reset.css';
	import '$lib/css/styles-main.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/footer1Home.svelte';
</script>

<Header />

<slot />

<!-- footer has been moved to the page template files in the /routes folder (as a quick fix). we need a slightly different footer layout for internal pages -->
<!-- <Footer />  -->
