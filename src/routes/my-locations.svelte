<script lang="ts">
	import Footer2 from '$lib/components/footer2Internal.svelte';
</script>

<svelte:head>
	<title>My Places | WhereTo.</title>
</svelte:head>

<main class="text-page my-locations">
	<section class="text-area">
		<h1>My Places  <span class="material-icons">
			place
			</span> </h1>
			
		<!-- test these URLS -->
		<h3 class="search-item">
			<a href="/location?place=cairo&country=egypt">
				<span class="material-icons">place</span>
				Cairo <small>- Egypt</small>
			</a>
		</h3>
		<h3 class="search-item">
			<a href="/location?place=lapland&country=finland">
				<span class="material-icons">place</span>
				Lapland <small>- Finland</small>
			</a>
		</h3>
		<h3 class="search-item">
			<a href="/location?place=berlin&country=germany">
				<span class="material-icons">place</span>
				Berlin <small>- Germany</small>
			</a>
		</h3>


	</section>

</main>

<Footer2 /><!-- this version of footer is for 'internal' pages -->

<style>
	h1 {
		border-bottom: 1px dashed var(--col-dividers-borders);
		padding-bottom: 1rem;
	}
	h1 .material-icons {
		margin-left: 1rem;
	}
	h3.search-item a {
		color: var(--col-brand-secondary);
		font-weight: bold;
		line-height: 1.5;
		text-indent: 1rem;
		display: block;
		padding-top: 1rem;
		padding-bottom: 1rem;
		border-bottom: 1px dashed var(--col-dividers-borders);
		transition: transform .1s; /* animation for :hover zoom */
	}
	h3.search-item a .material-icons {
		margin-right: 0.5rem;
		top: 4px;
		position: relative;
		display: inline;
	}
	h3.search-item a:hover {
		color: var(--col-brand-tertiary);
		opacity: 1;
		text-decoration: none;
		border-bottom: 1px dashed #a5a5a5;
		transform: scale(1.02); /* zoom effect */
	}
	h3.search-item a small {
		font-weight: normal;
	}

</style>
