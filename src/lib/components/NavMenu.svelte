<script lang="ts">
	export let isNavOpen: boolean;

	const closeNav = () => {
		isNavOpen = false;
	}

</script>

<nav class={isNavOpen ? 'showMenu' : ''}>
	<ul class="nav-links-primary">
		<li class="menuItem"><a  href="/" title="Home"on:click={closeNav}> Home </a></li>
		<li class="menuItem">
			<a
				href="/profile/my-locations"
				title="Saved Locations"
				on:click={closeNav}
				>My Locations
			</a>
		</li>
		<li class="menuItem">
			<a href="/my-searches" title="Saved Search Results"on:click={closeNav}>My Searches </a>
		</li>
	</ul>
	<ul class="nav-links-secondary">
		<li class="menuItem search">
			<a href="/search" title="New Search" on:click={closeNav}>
				<i class="searchIcon material-icons"> search </i>
			</a>
		</li>
		<!-- <li class="menuItem account"><a href="/account" title="My Account"> My Account</a></li> -->
	</ul>
</nav>

<style>
	/* styles for mobile nav menu with 'hamburger' icon */

	/* media query - show 'hamburger' icon and toggled menu only on small devices */
	@media (max-width: 768px) {
		/* menu to cover whole screen when revealed */
		nav {
			position: fixed;
			transform: translateY(-100%); /*hide the menu by default above the screen*/
			transition: transform 0.2s;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 99;
			background: var(--col-brand-primary);
			color: white;
			list-style: none;
			padding-top: 4rem;
			display: grid;
			align-items: center;
			justify-items: center;
		}

		nav li {
			line-height: 2;
			padding: 0.5rem 0;
		}
		nav li a {
			color: var(--col-bg);
			font-size: 1.5rem; /* 24px default */
			font-weight: bold;
		}
		.nav-links-primary li {
			border-bottom: 1px var(--col-dividers-borders2) solid;
		}
		.nav-links-secondary {
			text-align: center;
		}
		.nav-links-secondary li a {
			font-size: 0.875rem; /* 14px default */
			font-weight: normal;
		}
		.nav-links-secondary li.search a {
			background-color: #006bc9;
			display: grid;
			border-radius: 40px;
			width: 80px;
			height: 80px;
			align-items: center;
			margin-bottom: 1rem;
		}
		.nav-links-secondary li.search a:hover {
			text-decoration: none;
		}
		.nav-links-secondary li.search a i {
			font-size: 2.25rem; /* 36px default */
		}

		/* make menu slide down and cover the whole screen - toggled on and off with JS */
		.showMenu {
			transform: translateY(0);
		}
	}

	/* media query - hide 'hamburger' menu on larger devices */
	@media (min-width: 768px) {
		nav {
			display: grid;
			grid-template-columns: 70% 25%;
			grid-gap: 5%;
			justify-items: end;
			align-items: center;

		}
		ul {
			display: grid;
			grid-template-columns: auto auto auto;
			margin-bottom: 0;
		}
		ul li {
			padding: 0 0.5rem;
		}
		ul.nav-links-primary {
			justify-self: center;
		}
		ul.nav-links-primary li a {
			font-weight: bold;
			font-size: 1rem;
			padding: 0 0.75rem;
		}
		ul.nav-links-secondary {
			text-align: right;
		}
		ul.nav-links-secondary li a {
			font-size: 0.75rem; /* 12px default*/
			padding-left: 0.5rem;
		}
		ul.nav-links-secondary li.account {
			padding-right: 0;
		}
		ul.nav-links-secondary li.search a:hover {
			text-decoration: none;
		}
	}
</style>
