<script lang="ts">
	let clicks = 0;

	const handleClick = (): void => {
		clicks += 1;
	};

</script>

<h3>Hello! Welcome to the weather app!</h3>

<button on:click={handleClick}>
  {clicks}
</button>
