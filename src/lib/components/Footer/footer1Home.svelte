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
	/* footer */
	footer {
		z-index: 999; /* appears above everything except mobile nav menu (at z-index 9999) */
		position: fixed;
		bottom: 0;
		width: 100%;
		text-align: center;
		color: var(--col-bg);
		padding: 0.5rem 1rem;
		background: rgba(0, 4, 39, 0.35);
	}
	p {
		font-size: 0.75rem; /* 12px default */
		margin-bottom: 0;
	}
	p .divider {
		margin: 0 0.5em;
		color: var(--col-bg);
		opacity: 0.35;
	}
	a {
		color: var(--col-bg);
		font-weight: bold;
	}
	


	
</style>
