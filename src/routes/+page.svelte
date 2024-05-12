<script lang="ts">
	import KeySelector from './negativeHarmony/KeySelector.svelte';
	import CircleOfFifthsByKey from './negativeHarmony/CircleOfFifthsByKey.svelte';
	import { calculateRotationForKey } from './negativeHarmony/utility/drawingUtilities';
	import {
		circleOfFifths,
		filterSelectedKeyForEnharmonics
	} from './negativeHarmony/utility/musicDataUtilities';
	import ShowLinearPairs from './negativeHarmony/ShowLinearPairs.svelte';

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

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="key-selector">
	<p>Selected Key: {selectedKeyInParent}</p>

	<KeySelector
		on:keychange={handleKeyChange}
		on:focus={handleKeyChange}
		bind:selectedKey={selectedKeyInParent}
	/>
</section>
{#if selectedKeyInParent}
	<section class="circle-of-fifths">
		<CircleOfFifthsByKey
			on:keychange={handleKeyChange}
			bind:rotation={rotationinParent}
			bind:notes={notesInParent}
			bind:selectedKey={selectedKeyInParent}
		/>
	</section>
{/if}
<section>
	<ShowLinearPairs bind:notes={notesInParent} bind:selectedKey={selectedKeyInParent} />
</section>

<style>
	section.key-selector {
		display: flex;
		flex-direction: column;
	}
	section.circle-of-fifths {
	}
</style>
