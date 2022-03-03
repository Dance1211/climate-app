<script lang="ts">
	export let placeholder: string;
	export let id: string;
	export let placeId: null | string = null;
  export let required: boolean = false;
	let inputText = { current: '', editing: '' };
	let active = false;
	let showSuggestions = false;
	let predictions: null | any[] = null;
	const TEMPPREDICTION = [
		{
			place_id: 'abc1',
			placeName: 'placename 1'
		},
		{
			place_id: 'abc2',
			placeName: 'placename 2'
		},
		{
			place_id: 'abc3',
			placeName: 'placename 3'
		},
		{
			place_id: 'abc4',
			placeName: 'placename 4'
		},
		{
			place_id: 'abc5',
			placeName: 'placename 5'
		}
	];
	const placeIdFetch = async (location: string) => {
		const res = await fetch(`/api/destination/${location}`);
		if (res.status === 200) {
			const resObject = await res.json();
			predictions = resObject.predictions;
			placeId = resObject.place_id;
		} else {
			console.log('in the error');
			predictions = TEMPPREDICTION;
			placeId = 'TEMPPLACEID';
		}
	};
	const handleInputFocus = (): void => {
		active = true;
	};
	const handleInputEnter = (event): void => {
		if (event?.key === 'Enter') {
			event.currentTarget.blur();
			handleInputBlur();
		}
	};
	const handleInputBlur = (): void => {
		if (inputText.current !== inputText.editing) {
			showSuggestions = true;
			inputText.current = inputText.editing;
			placeIdFetch(inputText.current);
		}
		active = false;
	};
	const handleSuggestionClick = (prediction) => {
		return () => {
			placeId = prediction.place_id;
			inputText = { current: prediction.placeName, editing: prediction.placeName };
			showSuggestions = false;
		};
	};
</script>
<p>{showSuggestions}</p>
<div class={`locationSearch ${showSuggestions ? "onTop" : ""}`}>
	<div class={'container' + (active ? ' active' : '')}>
		<input
			type="text"
			{id}
			{placeholder}
			bind:value={inputText.editing}
			on:focus={handleInputFocus}
			on:blur={handleInputBlur}
			on:keyup={handleInputEnter}
			required={required}
		/>
		{#if predictions?.length && showSuggestions}
			<ul class="suggestionContainer">
				{#each predictions as prediction}
					<li class="suggestion">
						<button on:click={handleSuggestionClick(prediction)}>{prediction.placeName}</button>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
<style>
	.locationSearch {
		position: relative;
		height: 3rem;
		margin-bottom: 0.75em;
	}
	.container {
		position: absolute;
		z-index: 100;
		height: min-content;
		width: 100%;
		background-color: #f3f3f3;
		font-family: var(--font-fam);
		font-weight: 400;
		font-size: 0.875rem; /* 14px default */
		border: 1px solid var(--col-dividers-borders);
		border-radius: 10px;
		margin-bottom: 0.75em;
		overflow: hidden;
	}
	.active {
		border: 2px solid var(--col-dividers-borders2);
		margin: -1px;
	}
	.onTop {
		z-index: 400;
	}
	input {
		background-color: transparent;
		background-color: #f3f3f3;
		border-style: none;
		border-radius: 0;
		margin: 0;
	}
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus {
		/* Disable coloured background on autofilled items */
		transition: background-color 5000s ease-in-out 0s;
	}
	input:focus {
		border-color: var(--col-dividers-borders2);
		outline: none;
	}
	.suggestion button {
		background-color: transparent;
		text-align: left;
		color: black;
		padding: 0.5rem 1rem;
		margin: 0, -1px;
		font-family: var(--font-fam);
		font-weight: 400;
		font-size: 0.875rem; /* 14px default */
		border: none;
		width: 100%;
	}
</style>