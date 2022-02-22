<script lang="ts">
	import type { KGCode } from '$lib/types/kg-code';

	let kgCode: KGCode = null;
	let longitude = 0;
	let latitude = 0;

	const handleSubmit = async () => {
		const response = await fetch(`/api/kgcode?longitude=${longitude}&latitude=${latitude}`, {
			method: 'GET'
		});
		const body = await response.json();
		kgCode = body.kgCode;
	};
</script>

<h1>FIND A POINT</h1>

<form on:submit|preventDefault={handleSubmit}>
	<label>
		Longitude:
		<input name="longitude" type="number" bind:value={longitude} />
	</label>
	<label>
		Latitude:
		<input name="latitude" type="number" bind:value={latitude} />
	</label>
	<button type="submit">Find</button>
</form>

<p>
	Code: {kgCode}
</p>
