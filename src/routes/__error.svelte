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

<div class="error">
    <h1>Oops!</h1>
	<h2>Sorry, we couldn't load this page.</h2>
	<a href="/">Return to homepage and try again</a>
</div>

<style>
    .error {
        margin-top: 6em;
        text-align: center;
    }
</style>