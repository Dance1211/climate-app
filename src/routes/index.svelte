<script lang="ts">
	import GetWeather from '$lib/components/getWeather.svelte';
  import Greeting from '$components/greeting.svelte';
</script>

<main>
  <h1>Weather app</h1>
  <Greeting/>
	<GetWeather />
</main>