<script lang="ts">
	import { koppenZones } from '$lib/types/kg-code';
	import Chart from '$components/Chart.svelte';
	export let src: string;
	export let place: string;
	export let country: string;
	export let weather: any;
	export let cityInfo: any[];
</script>

<svelte:head>
	<title>About {place} | WhereTo.</title>
</svelte:head>

<main class="LocationData">
	
	<section class="intro" >
		<div class="text-area">
			<h1>
				{place} <small>- {country}</small>
			</h1>
			<p class="climate-zone">{koppenZones[cityInfo[0].details.kgcode]} climate</p>

			<img {src} alt={place} />
		</div>

		
	</section>

	<!-- <h2>Climate Zone: {koppenZones[cityInfo[0].details.kgcode]}</h2> -->
	<!-- <img {src} alt={place} /> -->

	<section class="graph-holder">
		<div class="content">
			<h3>Average temperature (&#8451;)</h3>
			<!-- Imported graph stretches to 100% width -->
			<div class="TempGraph">
				<!-- REMEMBER TO REINSTATE THIS -->
				<Chart {weather} />
			</div>
		</div>
	</section>

	<section class="suggestions">

		<div class="content">
			<h2>You may also like...</h2>
			{#each cityInfo as city (city.details._id)}

			<div class="container">
				
				<a href={`/location?place=${city.details.city_ascii}&country=${city.details.country}`}
					>
					<h3><span class="material-icons s-_7IsClt508jp">place</span> 
					{city.details.city} 
					<small class="country">
						- {city.details.country}
					</small>
					</h3>

					<img src={city.src} alt={city.details.city} />
				</a>

			</div>
			{/each}
		</div>

	</section>

	<a class="quick-search" title="New search" href="/">
		<i class="searchIcon material-icons">search </i>
	</a>


</main>

<style>
	main.LocationData {
		margin-top: 60px;
		background-size: contain;
		background-position: top center;
		background-attachment: fixed; 
		background-repeat: no-repeat;
	}
	/* intro */
	main.LocationData section.intro {
		background: var(--col-grad);
		display: grid;
		justify-items: center;
		text-align: center;
	}
	main.LocationData section.intro .text-area {
		width: 100%;
		max-width: 1240px;
		margin-right: auto;
		margin-left: auto;
		padding: 1rem;

		display: grid;
		grid-template-columns: 1fr;
		gap: 3%;
		justify-items: center;
	
	}
	main.LocationData section.intro h1 {
		text-transform: capitalize;
		color: var(--col-bg);
		margin-bottom: 0;
	}
	main.LocationData section.intro h1 small {
		font-weight: normal;
	}
	main.LocationData section.intro p.climate-zone {
		font-size: 0.75rem;
		color: var(--col-bg);
		margin-bottom: 0;
		font-style: italic;
	}
	main.LocationData section.intro img {
		max-width: 130px;
		margin-bottom: 1rem;
	}
	
	/* graph */
	section.graph-holder {
		width: 100%;

	}
	section.graph-holder .content {
		width: 100%;
		max-width: 1240px;
		margin-right: auto;
		margin-left: auto;
		padding: 1rem;
	}

	/* location suggestions */
	section.suggestions h2 {
		margin-bottom: 1rem;
		padding-bottom: 1rem;
		border-bottom: 1px dashed var(--col-dividers-borders);
	}
	section.suggestions .content {
		width: 100%;
		max-width: 1240px;
		margin-right: auto;
		margin-left: auto;
		padding: 1rem;
	}
	section.suggestions .content .container {
		margin-bottom: 1.5rem;
		border-bottom: 1px dashed var(--col-dividers-borders);
		padding: 0 0 1.5rem 0;
	}
	section.suggestions .content a {
		transition: transform .1s; /* animation for :hover zoom effect */
		display: block;
	}
	section.suggestions .content a:hover {
		text-decoration: none;
		opacity: 1;
		transform: scale(0.98); /* zoom effect */
	}
	section.suggestions .content a h3 {
		color: var(--col-brand-secondary);
		margin-bottom: 1rem;	
	}
	section.suggestions .content a:hover h3 {
		color: var(--col-brand-tertiary);
	}
	section.suggestions .content a h3 .material-icons {
		margin-right: 0.5rem;
		top: 4px;
		position: relative;
		display: inline;
		color: #adadad;
	}

	section.suggestions .content a h3 small.country {
		font-weight: normal;
	}
	


	/* all images */

	img {
		height: auto;
		border-radius: 20px;
	}

	@media only screen and (min-width: 768px) { 

		/* main.LocationData section.intro .text-area {
			grid-template-columns: 70% auto;
			gap: 3%;
		} */

  	
	}
</style>