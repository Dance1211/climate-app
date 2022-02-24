<script lang="ts">
	import type { CityDB } from '$lib/types/cities';

	import type { KGCode } from '$lib/types/kg-code';

	let kgCode: KGCode = null;
	let longitude = 0;
	let latitude = 0;
	let cities: CityDB[] = [];

	const handleSubmit = async () => {
		const codeResponse = await fetch(`/api/kgcode?longitude=${longitude}&latitude=${latitude}`, {
			method: 'GET'
		});
		const codeBody = await codeResponse.json();
		kgCode = codeBody.kgCode;
		const citiesResponce = await fetch(`/api/cities?longitude=${longitude}&latitude=${latitude}`);
		const citiesBody = await citiesResponce.json();
		cities = citiesBody.cities;
	};
</script>

<h1>FIND A POINT</h1>

<form on:submit|preventDefault={handleSubmit}>
	<label>
		Longitude:
		<input name="longitude" type="number" step="0.001" bind:value={longitude} />
	</label>
	<label>
		Latitude:
		<input name="latitude" type="number" step="0.001" bind:value={latitude} />
	</label>
	<button type="submit">Find</button>
</form>

<p>
	Code: {kgCode}
</p>

<h2>Locations:</h2>

<ul>
	{#each cities as city}
		<li>
			<h3>{city.city}</h3>
			<p>Location: {city.country}</p>
			<p>Population: {city.population}</p>
		</li>
	{/each}
</ul>
