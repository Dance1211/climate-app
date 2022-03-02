<script lang="ts">
	import Footer2 from '$lib/components/footer2Internal.svelte';
</script>

<svelte:head>
	<title>My Searches | WhereTo.</title>
</svelte:head>

<main class="text-page my-searches">
	<section class="text-area">
		<h1>My Searches  <span class="material-icons">
			search
			</span> </h1>
			
		<!-- test these URLS -->
		<h3 class="search-item">
			<a href="/searchresults?lat=30.03333&lng=31.23333&userlat=-2.24464&userlng=53.4835" title="View this search">
				I like the weather in: <br><strong>Cairo - Egypt</strong><br><br>
				My Location: <br><strong>Manchester - UK</strong>
			</a>
		</h3>

		<h3 class="search-item">
			<a href="/searchresults?lat=67.92223&lng=26.50464&userlat=-2.24464&userlng=53.4835" title="View this search">
				I like the weather in: <br><strong>Lapland - Finland</strong><br><br>
				My Location: <br><strong>Manchester - UK</strong>
			</a>
		</h3>
		<h3 class="search-item">
			<a href="/searchresults?lat=52.52000&lng=13.40495&userlat=-2.24464&userlng=53.4835" title="View this search">
				I like the weather in: <br>
				<strong>Berlin - Germany</strong><br><br>
				My Location: <br><strong>Manchester - UK</strong>
			</a>
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
	h3.search-item {
		margin-bottom: 1rem;
		padding-bottom: 1rem;
		border-bottom: 1px dashed var(--col-dividers-borders);
		font-weight: normal;
		line-height: 1.5;
	}
	h3.search-item strong {
		font-weight: bold;
		/* color: var(--col-brand-primary); */
	}
</style>
