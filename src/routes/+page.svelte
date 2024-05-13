<script lang="ts">
	import KeySelector from './KeySelector.svelte';
	import CircleOfFifthsByKey from './CircleOfFifthsByKey.svelte';
	import { calculateRotationForKey } from '../utility/drawingUtilities';
	import { circleOfFifths, filterSelectedKeyForEnharmonics } from '../utility/musicDataUtilities';

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

<section class="info">
	<div>
		<h1>Negative Harmony</h1>
		<p>
			Cosmic ocean not a sunrise but a galaxyrise emerged into consciousness invent the universe
			intelligent beings light years. Citizens of distant epochs shores of the cosmic ocean from
			which we spring a billion trillion vanquish the impossible citizens of distant epochs. A very
			small stage in a vast cosmic arena a mote of dust suspended in a sunbeam venture courage of
			our questions inconspicuous motes of rock and gas dream of the mind's eye and billions upon
			billions upon billions upon billions upon billions upon billions upon billions.
		</p>
	</div>
	<KeySelector
		on:keychange={handleKeyChange}
		on:focus={handleKeyChange}
		bind:selectedKey={selectedKeyInParent}
		bind:notes={notesInParent}
	/>
</section>
{#if selectedKeyInParent}
	<CircleOfFifthsByKey
		on:keychange={handleKeyChange}
		bind:rotation={rotationinParent}
		bind:notes={notesInParent}
		bind:selectedKey={selectedKeyInParent}
	/>
{/if}

<!-- <div> -->

<!-- </div> -->

<!-- <Listener /> -->

<style>
	@media (max-width: 1024px) {
		section {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 0.5fr;
			gap: 3%;
		}
	}
</style>
