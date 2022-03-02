<script lang="ts">
	import Footer2 from '$lib/components/footer2Internal.svelte';
</script>

<svelte:head>
	<title>My Places | WhereTo.</title>
</svelte:head>

<main class="text-page my-locations">
	<section class="text-area">
		<h1>My Places  <span class="material-icons">
			location_on
			</span> </h1>
			
		<!-- test these URLS -->
		<h3 class="search-item">
			<a href="/location?place=cairo&country=egypt">Cairo <small>- Egypt</small></a>
		</h3>
		<h3 class="search-item">
			<a href="/location?place=lapland&country=finland">Lapland <small>- Finland</small></a>
		</h3>
		<h3 class="search-item">
			<a href="/location?place=berlin&country=germany">Berlin <small>- Germany</small></a>
		</h3>


	</section>

</main>

<Footer2 /><!-- this version of footer is for 'internal' pages -->

<style>
	h1 {
		padding-bottom: 1rem;
		border-bottom: 1px dashed var(--col-dividers-borders);
	}
	h3 a {
		color: var(--col-brand-secondary);
	}
	h3 a:hover {
		color: var(--col-brand-tertiary);
		opacity: 1;
	}
	h3.search-item {
		margin-bottom: 1rem;
		padding-bottom: 1rem;
		border-bottom: 1px dashed var(--col-dividers-borders);
		font-weight: bold;
		line-height: 1.5;
	}
	h3.search-item small {
		font-weight: normal;
	}

</style>
