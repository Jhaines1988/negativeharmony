<script lang="ts">
	import KeySelector from './KeySelector.svelte';
	import CircleOfFifthsByKey from './CircleOfFifthsByKey.svelte';
	import {
		drawLine,
		getElementPosition,
		applyRotationToCircle,
		type Position,
		calculateRotationForKey
	} from './utility/drawingUtilities';
	import { circleOfFifths, filterSelectedKeyForEnharmonics } from './utility/musicDataUtilities';

	let currentRotation: number = 0;
	let selectedKeyInParent = 'C';
	let preferSharpsInParent: boolean;
	var notesInParent = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'Db', 'Ab', 'Eb', 'Bb', 'F'];
	var rotationinParent: number = 0;

	function handleKeyChange(e: any) {
		var filteredKey: string = filterSelectedKeyForEnharmonics(e.detail.value);
		selectedKeyInParent = filteredKey;
		notesInParent = circleOfFifths[selectedKeyInParent];
		rotationinParent = calculateRotationForKey(selectedKeyInParent, notesInParent);
	}
	function handleUpdateNotationPreference(e: any) {
		preferSharpsInParent = e.detail.preference;
		handleKeyChange(e);
	}
</script>

<KeySelector
	on:keychange={handleKeyChange}
	on:notationpreference={handleUpdateNotationPreference}
	bind:preferSharps={preferSharpsInParent}
	bind:selectedKey={selectedKeyInParent}
/>

{#if selectedKeyInParent}
	<p>Selected Key: {selectedKeyInParent}</p>
	<CircleOfFifthsByKey
		on:keychange={handleKeyChange}
		bind:rotation={rotationinParent}
		bind:notes={notesInParent}
		bind:selectedKey={selectedKeyInParent}
		bind:preferSharps={preferSharpsInParent}
	/>
{/if}
<div>{preferSharpsInParent}</div>

<style>
	div {
		margin-top: 400px;
	}
</style>
