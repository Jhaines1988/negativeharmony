<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { circleOfFifths } from './utility/musicDataUtilities';

	export var selectedKey: string;

	const dispatch = createEventDispatcher();
	function updateSelectedKey(selectedKey: string) {
		dispatch('keychange', {
			value: selectedKey
		});
	}
	const keys = Object.keys(circleOfFifths);
</script>

<select bind:value={selectedKey} on:change={() => updateSelectedKey(selectedKey)}>
	<option value="" disabled>Select a key</option>
	{#each keys as key}
		<option value={key}>{key}</option>
	{/each}
</select>

{#each keys as keySignature}
	<label>
		<input
			on:change={() => updateSelectedKey(keySignature)}
			type="radio"
			name="scoops"
			value={keySignature}
			bind:group={selectedKey}
		/>

		{keySignature}
	</label>
{/each}
