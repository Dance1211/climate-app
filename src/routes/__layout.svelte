<script lang="ts">
	import '$lib/css/styles-basic-reset.css';
	import '$lib/css/styles-main.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
