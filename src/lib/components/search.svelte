<script lang="ts">
	type Query = { location: string; home: string };

	let searchQuery: Query = {
		location: '',
		home: ''
	};

    $: console.log(searchQuery)

	const onSubmit = (e): void => {
        console.log(e);
		const formData: any = new FormData(e.target);
		const asString = new URLSearchParams(formData).toString();
		console.log(asString);
        // axios request
        // create new component to render data inside
	};
</script>

<svelte:head>
	<title>Climate Travel App</title>
</svelte:head>

<main class="Search">
	<h2>Compare travel destinations by climate.</h2>

	<form on:submit|preventDefault={onSubmit}>
		<div>
			<label for="location">I like the weather in</label>
			<input
				type="text"
				name="location"
				id="location"
				bind:value={searchQuery.location}
				placeholder="City, country or town..."
				required
			/>
		</div>
		<div>
			<label for="home">My location is</label>
			<input
				type="text"
				name="home"
				id="home"
				bind:value={searchQuery.home}
				placeholder="City or town..."
			/>
		</div>
		<button disabled={!searchQuery.location} type="submit">Search</button>
	</form>
</main>

<style>
	form {
		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: center;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
	}
	form > div {
		display: flex;
		flex-direction: column;
	}
</style>
