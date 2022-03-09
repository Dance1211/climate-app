<script lang="ts">
	import { page } from '$app/stores';
	import Footer1Home from '$components/Footer/footer1Home.svelte';
	import Footer2Internal from '$components/Footer/footer2Internal.svelte';
</script>

{#if ($page.url.pathname === '/')}
	<Footer1Home />
{:else}
	<Footer2Internal />
{/if}
