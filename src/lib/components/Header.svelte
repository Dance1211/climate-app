<script lang="ts">
	import '$components/NavMenu.svelte';
	import NavMenu from '$components/NavMenu.svelte';
	let isNavOpen: boolean = false;
	function toggleNav() {
		isNavOpen = !isNavOpen;
	}
</script>

<header>
	<h2 class="logo">
		<a href="/" title="Home">
			where<em>to.</em>
		</a>
	</h2>
	<button class="hamburger" on:click={toggleNav}>
		{#if !isNavOpen}
			<i class="menuIcon material-icons"> menu </i>
		{:else}
			<i class="closeIcon material-icons"> close </i>
		{/if}
	</button>
	<NavMenu bind:isNavOpen />
</header>

<style>
	header {
		position: fixed;
		top: 0;
		z-index: 9999;
		width: 100%;
		background: var(--col-bg);
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
		padding: 0 1rem;

		display: grid;
		grid-template-columns: auto auto auto;
		grid-gap: 8%;
		width: 100%;
		max-width: 1240px;
		margin-right: auto;
		margin-left: auto;
		align-items: center;
		height: 60px;
	}
	.logo {
		margin-bottom: 0;
	}
	.logo a {
		color: var(--col-brand-primary);
	}
	.logo a em {
		color: var(--col-brand-tertiary);
		font-style: normal;
	}

	button.hamburger {
		position: fixed;
		z-index: 9999;
		top: 1rem;
		right: 1rem;
		padding: 0.5rem;
		border: none;
		background: none;
		cursor: pointer;
		color: var(--col-brand-primary);
		border-radius: 5px;
	}

	button.hamburger:hover {
		color: var(--col-bg);
	}

	.closeIcon {
		color: var(--col-bg);
	}

	@media only screen and (min-width: 768px) {
		/* header - nav layout changes */
		header {
			display: grid;
			grid-template-columns: 20% 80%;
			grid-gap: 0;
			padding-right: 1rem;
		}

		button.hamburger {
			display: none;
		}
	}
</style>
