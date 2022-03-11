<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error }) {
		return {
			props: { error }
		};
	}
</script>

<script>
	/** @type {Error & {frame?: string} & {loc?: object}} */
	export let error;
</script>

<svelte:head>
	<title>Error | WhereTo.</title>
</svelte:head>

<main class="text-page">
	<section class="text-area">
		
		<p class="error">
			<span class="material-icons"><span class="material-icons">
				outlet
				</span></span>
		</p>
		<h1>Oops!</h1>
		<h3>Sorry, but we couldn't load this page.</h3>
		
		<p><a href="/">Go to homepage and try again.</a></p>
	</section>
</main>

<style>
	section.text-area { 
		text-align: center; 
		margin: 0 auto;
	}
	p.error span.material-icons {
		font-size: 180px;
		color: #cccccc;
	}
</style>