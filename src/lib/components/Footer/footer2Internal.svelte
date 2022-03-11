<script lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';
	const year = new Date().getFullYear();

	export async function load({ url }: LoadInput): Promise<LoadOutput> {
		return {
			status: 200,
			props: {
				isHomePage: url.pathname == '/'
			}
		};
	}
</script>

<footer>
	<p>
		&copy;
		{year}
		Team X <span class="divider">|</span>
		<a href="/about" title="About the app">about & credits</a> <span class="divider">|</span>
		<!-- <a href="/seed" title="Seed the Database">seeding</a> -->
	</p>
</footer>

<style>
	/* footer styles are slightly different on internal pages - not 'sticky' like the home/search page version */	footer {
		width: 100%;
		text-align: center;
		padding: 0 1rem;
	}
	footer p {
		font-size: 0.75rem; /* 12px default */
		margin-bottom: 0;
		padding: 0.5rem 0;
	}
	footer p .divider {
		margin: 0 0.5em;
		color: var(--col-bg);
		opacity: 0.35;
	}
</style>
