<script lang="ts">
	import KeySelector from './KeySelector.svelte';
	import CircleOfFifthsByKey from './CircleOfFifthsByKey.svelte';
	import { calculateRotationForKey } from '../utility/drawingUtilities';
	import { circleOfFifths, filterSelectedKeyForEnharmonics } from '../utility/musicDataUtilities';
	import ShowLinearPairs from './ShowLinearPairs.svelte';
	import Listener from './Listener.svelte';

	let selectedKeyInParent = 'C';
	var notesInParent = circleOfFifths[selectedKeyInParent];
	var rotationinParent: number = 0;

	function handleKeyChange(e: any) {
		var filteredKey: string = filterSelectedKeyForEnharmonics(e.detail.value);
		selectedKeyInParent = filteredKey;
		var newNotes = circleOfFifths[filteredKey];
		notesInParent = newNotes;
		rotationinParent = calculateRotationForKey(selectedKeyInParent, notesInParent);
	}
</script>

<KeySelector
	on:keychange={handleKeyChange}
	on:focus={handleKeyChange}
	bind:selectedKey={selectedKeyInParent}
/>
<div>
	{#if selectedKeyInParent}
		<p>Selected Key: {selectedKeyInParent}</p>
		<CircleOfFifthsByKey
			on:keychange={handleKeyChange}
			bind:rotation={rotationinParent}
			bind:notes={notesInParent}
			bind:selectedKey={selectedKeyInParent}
		/>
	{/if}
</div>
<ShowLinearPairs bind:notes={notesInParent} bind:selectedKey={selectedKeyInParent} />
<Listener />

<style>
	div {
		display: grid;
		height: 300px;
		margin-bottom: 100px;
	}
</style>
