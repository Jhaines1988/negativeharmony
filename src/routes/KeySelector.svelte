<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import {
		circleOfFifths,
		majorScales,
		majorScalesReflections
	} from '../utility/musicDataUtilities';
	import ShowLinearPairs from './ShowLinearPairs.svelte';

	export var selectedKey: string;
	export var notes: string[];
	$: scale = majorScales[selectedKey];
	$: reflected = majorScalesReflections[selectedKey];

	const dispatch = createEventDispatcher();
	function updateSelectedKey(selectedKey: string) {
		dispatch('keychange', {
			value: selectedKey
		});
	}
	const keys = Object.keys(circleOfFifths);
</script>

<div class="key-selector-container">
	<h3>Key Selector</h3>
	{#each keys as keySignature}
		<label for="key-signature-{keySignature}">
			<input
				on:change={() => updateSelectedKey(keySignature)}
				on:focus={() => updateSelectedKey(keySignature)}
				type="radio"
				id="key-signature-{keySignature}"
				tabindex="0"
				name="key-signature-{keySignature}"
				value={keySignature}
				bind:group={selectedKey}
			/>

			{keySignature}
		</label>
	{/each}
	<ShowLinearPairs bind:notes bind:selectedKey></ShowLinearPairs>
</div>

<style>
	label {
		width: 50px;
	}
	.key-selector-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		gap: 5px;
		align-items: center;
	}
	@media (max-width: 1120px) {
		.key-selector-container {
			display: block;
		}
		label {
			display: inline-block;
		}
	}
</style>
