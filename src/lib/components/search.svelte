<script>
	let locationTerm = '';
    let homeTerm = '';
</script>

<svelte:head>
	<title>Climate Travel App</title>
</svelte:head>

<div class="Search">
	<h2>Compare travel destinations by climate.</h2>

	<form>
		<label for="location">I like the weather in</label>
		<input type="text" id="location" bind:value={locationTerm} placeholder="City, country or town..." />
		<label for="home">My location is</label>
		<input type="text" id="home" bind:value={homeTerm} placeholder="City or town..." />
		<button type="submit">Search</button>
	</form>
</div>

<style>
	form {
		display: grid;
		justify-items: center;
		align-items: center;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
	}
</style>
