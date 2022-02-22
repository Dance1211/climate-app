<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	let menu: boolean = false;
	function openMenu() {
		menu = !menu;
	}
</script>

<header>
	<div on:click={openMenu}>
		<Fa icon={faBars} />
	</div>
	<h1>Weather app</h1>
	{#if !menu }
		<ul>
            
			<a href="/" >Home </a>
			<li>Search</li>
		</ul>
	{/if}
</header>

<style>
	h1 {
		text-align: center;
	}
</style>
