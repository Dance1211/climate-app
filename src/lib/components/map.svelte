<script lang="ts">
	import type { CityDB } from '$lib/types/cities';
	import type { Coordinates } from '$lib/types/kg-code';

	export let cities = [
		{
			location: { type: 'Point', coordinates: [-74.0705, 4.6126] },
			city: 'Xogotá',
			city_ascii: 'Bogota',
			country: 'Colombia',
			iso2: 'CO',
			iso3: 'COL',
			population: 9464000,
			kgcode: 'Cfb'
		},
		{
			location: { type: 'Point', coordinates: [36.8172, -1.2864] },
			city: 'Nairobi',
			city_ascii: 'Nairobi',
			country: 'Kenya',
			iso2: 'KE',
			iso3: 'KEN',
			population: 5545000,
			kgcode: 'Cfb'
		},
		{
			location: { type: 'Point', coordinates: [144.9631, -37.8136] },
			city: 'Melbourne',
			city_ascii: 'Melbourne',
			country: 'Australia',
			iso2: 'AU',
			iso3: 'AUS',
			population: 5078193,
			kgcode: 'Cfb'
		},
		{
			location: { type: 'Point', coordinates: [13.3833, 52.5167] },
			city: 'Berlin',
			city_ascii: 'Berlin',
			country: 'Germany',
			iso2: 'DE',
			iso3: 'DEU',
			population: 3644826,
			kgcode: 'Cfb'
		},
		{
			location: { type: 'Point', coordinates: [-123.1, 49.25] },
			city: 'Vancouver',
			city_ascii: 'Vancouver',
			country: 'Canada',
			iso2: 'CA',
			iso3: 'CAN',
			population: 2264823,
			kgcode: 'Cfb'
		},
		{
			location: { type: 'Point', coordinates: [-78.5097, -0.2186] },
			city: 'Quito',
			city_ascii: 'Quito',
			country: 'Ecuador',
			iso2: 'EC',
			iso3: 'ECU',
			population: 2011388,
			kgcode: 'Cfb'
		},
		{
			location: { type: 'Point', coordinates: [16.3731, 48.2083] },
			city: 'Vienna',
			city_ascii: 'Vienna',
			country: 'Austria',
			iso2: 'AT',
			iso3: 'AUT',
			population: 1911191,
			kgcode: 'Cfb'
		},
		{
			location: { type: 'Point', coordinates: [-49.2719, -25.4297] },
			city: 'Curitiba',
			city_ascii: 'Curitiba',
			country: 'Brazil',
			iso2: 'BR',
			iso3: 'BRA',
			population: 1879355,
			kgcode: 'Cfb'
		},
		{
			location: { type: 'Point', coordinates: [21.0333, 52.2167] },
			city: 'Warsaw',
			city_ascii: 'Warsaw',
			country: 'Poland',
			iso2: 'PL',
			iso3: 'POL',
			population: 1790658,
			kgcode: 'Cfb'
		},
		{
			location: { type: 'Point', coordinates: [19.0408, 47.4983] },
			city: 'Budapest',
			city_ascii: 'Budapest',
			country: 'Hungary',
			iso2: 'HU',
			iso3: 'HUN',
			population: 1752286,
			kgcode: 'Cfb'
		}
	] as CityDB[];

	const getMapPositionLeft = (coordinates: Coordinates): number => {
		return (coordinates[0] + 180) / 3.6;
	};

	const getMapPositionTop = (coordinates: Coordinates): number => {
		return (90 - coordinates[1]) / 1.8;
	};
</script>

<section class="map">
	{#each cities as city}
		<div
			class="marker"
			style="top: {getMapPositionTop(city.location.coordinates)}%; left: {getMapPositionLeft(
				city.location.coordinates
			)}%"
		/>
	{/each}
</section>

<style>
	.map {
		margin-top: 200px;
		position: relative;
		width: 100%;
		max-width: 100vw;
		max-height: 100vh;
		background-image: url('/images/mapBackground.png');
		background-position: center;
		background-size: cover;
		aspect-ratio: 2;
	}

	.marker {
		position: absolute;
		background-image: url('/images/mapPointer.svg');
		width: 20px;
		height: 20px;
		/* left: 50%;
    top: 50%; */
		color: white;
		transform: translate(-50%, -100%);
	}

	.marker:hover {
		transform: translate(-50%, -105%) scale(1.1);
	}
</style>
