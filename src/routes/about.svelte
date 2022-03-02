<script lang="ts">
	import Footer2 from '$lib/components/footer2Internal.svelte';
</script>


<main class="text-page">
	<section class="text-area">
		<h1>What is whereto?</h1>
		<p>WhereTo. is an experimental web app, created to compare different travel destinations by climate.</p>
		<p>The user can search for similar destinations around the world, which are categorised using their <a href="https://en.wikipedia.org/wiki/K%C3%B6ppen_climate_classification" target="_blank">Köppen climate classification</a>.</p>

		<h1>Who made it?</h1>
		<p>The project was developed by a 'Team X' - a group of 5 students on the <a href="https://northcoders.com/" target="_blank">Northcoders Coding Bootcamp</a>. This was their first time working as a group.</p> 
		<p>Development took place over 8-9 days in February-March 2022.</p>

		<h1>How's it built?</h1>
		<p>The team decided to try out some new technology that was not taught on the course (which was mainly based around JavaScript, Node and React).</p>
		<p>The app uses the <a href="https://svelte.dev/" target="_blank">Svelte</a> framework, <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>, <a href="https://www.mongodb.com" target="_blank">mongoDB</a> for the databases, and various APIs to grab location images and weather data. All brought together with copious amounts of JavaScript, HTML and CSS.</p>

		<h1>Credits</h1>
		<p>Thanks to the open source community and various creatives and developers who help make projects like this possible.</p>
		<p><a href="https://unsplash.com/" target="_blank">Unsplash</a> - community of 'open source' photographers. Thanks for the beautiful background images.</p>
		<p><a href="https://openweathermap.org/" target="_blank">OpenWeatherMap API</a> - for the weather forecast data.</p>
		<p><a href="https://www.amcharts.com/" target="_blank">amCharts</a> - for the animated weather icons.</p>
		<p><a href="https://www.chartjs.org/" target="_blank">Chart.js</a> - for helping our charts look nice.</p>
		<p><a href="https://developers.google.com/maps/documentation/places/web-service/overview" target="_blank">Google Places API</a> - for location imagery from the Google Maps Platform.</p>

	</section>

</main>

<Footer2 /><!-- this version of footer is for 'internal' pages -->

<style>


</style>
