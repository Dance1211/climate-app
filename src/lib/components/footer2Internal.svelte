<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer>
	<p>
		&copy;
		{year}
		Team X <span class="divider">|</span>
		<a href="/about" title="About the app">about & credits</a>
	</p>
</footer>

<style>
	/* footer styles are slightly different on internal pages - not 'sticky' like the home/search page version */

	footer {
		width: 100%;
		text-align: center;
		padding: 0 1rem;
	}
	footer p {
		font-size: 0.75rem; /* 12px default */
		margin-bottom: 0;
		padding: .5rem 0;
	}
	footer p .divider {
		margin:0 0.5em;
		color: var(--col-bg);
		opacity: 0.35;
	} 

</style>
