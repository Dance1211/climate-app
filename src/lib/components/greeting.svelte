<script lang="ts">
	let clicks = 0;

	const handleClick = (): void => {
		clicks += 1;
	};
</script>

<div class="container">
	<h3>Hello! Welcome to the weather app!</h3>
	<p>The button below is to confirm that the code is working.</p>
	<p class="primary">This is the primary color</p>
	<p class="secondary">This is the secondary color</p>
	<button on:click={handleClick}>
		{clicks}
	</button>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 20px;
	}

	p {
		font-weight: 200;
	}

	.primary {
		background-color: var(--primary-color);
		color: white;
	}

	.secondary {
		background-color: var(--secondary-color);
	}

	button {
		border: 1px solid gray;
		background-color: var(--secondary-color);
		padding: 0.5rem 2rem;
		font-family: inherit;
		border-radius: 1rem;
		text-align: center;
		width: 7rem;
	}

	button:hover {
		background-color: var(--primary-color);
	}
</style>
