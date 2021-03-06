<script lang="ts">
	import type { KGCode } from '$lib/types/kg-code';
	import { koppenZones } from '$lib/types/kg-code';
	import WeatherCard from '$lib/components/WeatherCard.svelte';
	import type { City } from '$lib/types/cities';
	import Map from '$lib/components/map.svelte';

	export let kgCode: KGCode = null;
	export let combinedData: City[];
	export let placeName = 'placeholder';
	export let country = 'placeholder';
	const mapCoord = combinedData.map((data, index) => {
		return { details: data.details, index };
	});

	const handleSelect = (e) => {
		let sort = e.target.value;
		combinedData = combinedData.sort((a, b) => {
			if (sort === 'temp-coldest') {
				return a.weather.temp - b.weather.temp;
			} else if (sort === 'temp-hottest') {
				return b.weather.temp - a.weather.temp;
			} else if (sort === 'population') {
				return b.details.population - a.details.population;
			}
		});
	};
</script>

<main class="search-results">
	<!-- location intro -->
	<section class="intro">
		<div class="text-area">
			<h1>
				Places like <strong>
					{placeName} <small style="display: block;">- {country}</small>
				</strong>
			</h1>
			<p class="climate-zone">{koppenZones[kgCode]} climate</p>
		</div>
	</section>

	<Map cities={mapCoord} />

	<section class="change-search-and-sort">
		<p class="change-search">
			<a title="Change search terms" href="/">
				<i class="searchIcon material-icons">search </i>Change search
			</a>
		</p>

		<div class="sort">
			<label for="sort-by">Sort by</label>
			<select on:change={handleSelect} name="sort-by" id="sort-by">
				<option value="population">Population</option>
				<option value="temp-hottest">Hottest</option>
				<option value="temp-coldest">Coldest</option>
			</select>
		</div>
	</section>

	<section class="results-items">
		{#each combinedData as city, index (city.details._id)}
			<WeatherCard {index} {city} />
		{/each}
	</section>

	<a class="quick-search" title="New search" href="/">
		<i class="searchIcon material-icons">search </i>
	</a>
</main>

<style>
	/* search results page */
	main.search-results section {
		/* center all 'section' elements & set widths */
		width: 100%;
		max-width: 1240px;
		margin-right: auto;
		margin-left: auto;
	}

	main.search-results {
		margin-top: 60px;
		margin-bottom: 180px;
		width: 100%;
	}
	main.search-results section.intro {
		background: var(--col-grad);
		padding: 1rem;
		max-width: none; /* override default for 'sections' & fill width */
	}
	main.search-results .intro .text-area {
		display: grid;
		grid-template-columns: 70% auto;
		gap: 3%;
		max-width: 1240px;
		margin-right: auto;
		margin-left: auto;
	}
	main.search-results .intro h1 {
		color: var(--col-bg);
		font-size: 1.625rem; /* 26px default */
		margin-bottom: 0;
	}
	main.search-results .intro h1 strong {
		font-weight: bold;
		display: block;
		font-size: 2.25rem; /* 36px default */
	}
	main.search-results .intro h1 small {
		font-weight: normal;
		font-size: 1.25rem;
	}
	main.search-results .intro p.climate-zone {
		font-size: 0.75rem; /* 12px default */
		color: var(--col-bg);
		margin-bottom: 0;
		align-self: end;
		justify-self: end;
		text-align: right;
		/* text-transform: uppercase; */
		font-style: italic;
	}
	main.search-results .intro label {
		font-size: 0.875rem; /* 14px default */
	}

	/* search results page */
	main.search-results .change-search-and-sort {
		display: grid;
		grid-template-columns: auto auto;
		border-bottom: 1px dashed var(--col-dividers-borders);
		padding: 0 1rem 1rem 1rem;
		margin-top: 1rem;
		margin-bottom: 1.5rem;
	}
	main.search-results .change-search-and-sort .change-search {
		font-size: 0.75rem; /* 12px default */
		text-decoration: underline;
		color: var(--col-brand-primary);
	}
	main.search-results .change-search-and-sort .change-search i {
		top: 8px;
		position: relative;
		margin-right: 0.25em;
	}
	main.search-results .change-search-and-sort .sort {
		display: grid;
		grid-template-columns: auto auto;
		align-items: center;
		justify-content: end;
		gap: 10px;
	}
	main.search-results .change-search-and-sort .sort label {
		font-weight: normal;
		font-size: 0.75rem; /* 12px default */
	}
	main.search-results .change-search-and-sort .sort select {
		margin-bottom: 0;
		font-size: 0.75rem; /* 12px default */
	}
	main.search-results .change-search-and-sort .sort select option {
		font-size: 0.875rem; /* 14px default */
	}
	/* search results page - result items area */
	main.search-results .results-items {
		/* holds all result items */
		display: grid;
	}

	/* medium devices, 768px + */
	@media only screen and (min-width: 768px) {
		/* search results page */
		main.search-results .intro .text-area {
			padding-top: 2rem;
		}
		main.search-results .intro h1 {
			font-size: 3.375rem; /* 54px default */
			font-weight: 400;
		}
		main.search-results .intro h1 strong {
			font-size: 3.375rem; /* 54px default */
			display: inline;
		}

		main.search-results .results-items {
			/* reorganise the layout */
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 3%;
		}
	}
</style>
