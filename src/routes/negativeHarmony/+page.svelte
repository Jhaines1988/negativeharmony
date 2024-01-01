<script lang="ts">
	import KeySelector from './KeySelector.svelte';
	import CircleOfFifthsByKey from './CircleOfFifthsByKey.svelte';
	import { calculateRotationForKey } from './utility/drawingUtilities';
	import { circleOfFifths, filterSelectedKeyForEnharmonics } from './utility/musicDataUtilities';
	import ShowLinearPairs from './ShowLinearPairs.svelte';

	let selectedKeyInParent = 'C';
	var notesInParent = circleOfFifths[selectedKeyInParent];
	var rotationinParent: number = 0;

	function handleKeyChange(e: any) {
		var filteredKey: string = filterSelectedKeyForEnharmonics(e.detail.value);
		selectedKeyInParent = filteredKey;
		console.log('Selected Key In parent: ', selectedKeyInParent);
		console.log('Filtered Key In parent: ', filteredKey);

		var newNotes = circleOfFifths[filteredKey];
		console.log('New notes in parent', newNotes);
		notesInParent = newNotes;
		rotationinParent = calculateRotationForKey(selectedKeyInParent, notesInParent);
		// getAllNoteDisplayElements(selectedKeyInParent);
	}
	function getAllNoteDisplayElements(selectedKey: string) {
		var allNotes: HTMLCollection = document.getElementsByClassName('note-display');
		var notesInSelectedKey = circleOfFifths[selectedKey];

		Array.from(allNotes).forEach((note, index) => {
			note.innerHTML = notesInSelectedKey[index];
		});
	}
</script>

<KeySelector on:keychange={handleKeyChange} bind:selectedKey={selectedKeyInParent} />
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
<ShowLinearPairs />

<style>
	div {
		display: grid;
		height: 600px;
		margin-bottom: 100px;
	}
</style>
