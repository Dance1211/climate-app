<script lang="ts">
	import Footer2 from '$lib/components/footer2Internal.svelte';
</script>

<svelte:head>
	<title>My Searches | WhereTo.</title>
</svelte:head>

<main class="text-page my-searches">
	<section class="text-area">
		<h1>My Searches  
			<!-- <span class="material-icons">
			search
			</span>  -->
		</h1>
			
		<!-- test these URLS -->
		<h3 class="search-item">
			<a href="/searchresults?lat=30.03333&lng=31.23333&userlat=-2.24464&userlng=53.4835" title="View Search Results">
				<div class="like-location">
					<span class="material-icons">search</span>
					Places like: <strong>Cairo <small>- Egypt</small></strong> 
				</div>
				<div class="my-location">
					<span class="material-icons">place</span>
					Location: <strong>Manchester <small>- UK</small></strong> 
				</div>		
			</a>

			<!--Dummy delete button-->
			<a class="delete" title="Delete" href="#" >
				<span class="material-icons">clear</span>
			</a>
		</h3>

		<h3 class="search-item">
			<a href="/searchresults?lat=67.92223&lng=26.50464&userlat=-2.24464&userlng=53.4835" title="View Search Results">
				<div class="like-location">
					<span class="material-icons">search</span>
					Places like: <strong>Lapland <small> - Finland</small></strong>
				</div>
				<div class="my-location">
					<span class="material-icons">place</span>
					Location: <strong>Manchester <small>- UK</small></strong> 
				</div>		
			</a>

			<!--Dummy delete button-->
			<a class="delete" title="Delete" href="#" >
				<span class="material-icons">clear</span>
			</a>
		</h3>

		<h3 class="search-item">
			<a href="/searchresults?lat=52.52000&lng=13.40495&userlat=-2.24464&userlng=53.4835" title="View Search Results">
				<div class="like-location">
					<span class="material-icons">search</span>
					Places like: <strong>Berlin <small>- Germany</small></strong>
				</div>
				<div class="my-location">
					<span class="material-icons">place</span>
					Location: <strong>Manchester <small>- UK</small></strong> 
				</div>	
			</a>

			<!--Dummy delete button-->
			<a class="delete" title="Delete" href="#" >
				<span class="material-icons">clear</span>
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
	h1 .material-icons {
		margin-left:1rem;
	}
	h3 a {
		color: var(--col-brand-secondary);
	}
	h3.search-item {
		border-bottom: 1px dashed var(--col-dividers-borders);
		font-weight: normal;
		line-height: 1.5;
	}
	h3.search-item strong {
		font-weight: bold;
	}
	h3.search-item a {
		color: var(--col-brand-secondary);
		line-height: 1.5;
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
		color:#adadad;
	}
	h3.search-item a div {
		display: block;
	}
	h3.search-item a div.like-location {
		margin-bottom: 0.5rem;
	}
	h3.search-item a:hover {
		color: var(--col-brand-tertiary);
		opacity: 1;
		text-decoration: none;
		border-bottom: 1px dashed #a5a5a5;;
		transform: scale(1.02); /* zoom effect */
	}
	h3.search-item a.delete  {
		position: relative;
		right: 0;
		bottom: 60px;
		border: none;
		display: block;
		width: 24px;
		height: 24px;
		float: right;
		background: var(--col-bg);
	}
	h3.search-item a.delete span.material-icons {
		color:var(--col-brand-primary);
	}
	h3.search-item a.delete span.material-icons:hover {
		color:var(--col-brand-tertiary);
	}

	/* --------- MEDIA QUERIES FOR LARGER DEVICES---------  */
	@media only screen and (min-width: 768px) { 

		h3.search-item a {
			padding-left: 1rem;
		}
	}
</style>