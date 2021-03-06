/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/typescript
// for information about these interfaces
declare namespace App {
	interface Locals {}

	interface Platform {}

	interface Session {}

	interface Stuff {}

	interface ImportMetaEnv{
		VITE_GMAPS_KEY: string
		VITE_WEATHER_API_KEY: string
	}
}


