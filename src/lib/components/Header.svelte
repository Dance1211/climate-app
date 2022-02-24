<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	let menu: boolean = false;
	function openMenu() {
		menu = !menu;
	}
</script>

<header>
	<nav>
		<h2 class="logo">
			<a href="/" title="Home">
			where<em>to.</em>
			</a> 
		</h2>
		<button class="hamburger" on:click={openMenu}>
			{#if menu}
			<i class="menuIcon material-icons"> menu </i>
			{:else}
			<i class="closeIcon material-icons"> close </i>
			{/if}
			<Fa icon={faBars} />
		</button>

		{#if !menu}
			<ul class="nav-links-primary">
				<li class="menuItem"><a href="/" title="Home"> Home </a></li>
				<li class="menuItem">
					<a href="/profile/my-locations" title="Saved Locations">My Locations </a>
				</li>
				<li class="menuItem">
					<a href="/my-searches" title="Saved Search Results">My Searches </a>
				</li>
			</ul>
			<ul class="nav-links-secondary">
				<li class="menuItem search">
					<a href="/search" title="New Search">
						<i class="searchIcon material-icons"> search </i>
					</a>
				</li>
				<li class="menuItem account"><a href="/account" title="My Account"> My Account</a></li>
			</ul>
		{/if}
	</nav>
</header>

<style>
	h1 {
		text-align: center;
	}
</style>
