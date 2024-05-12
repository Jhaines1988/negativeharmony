<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { circleOfFifths } from '../utility/musicDataUtilities';

	export var selectedKey: string;

	const dispatch = createEventDispatcher();
	function updateSelectedKey(selectedKey: string) {
		dispatch('keychange', {
			value: selectedKey
		});
	}
	const keys = Object.keys(circleOfFifths);
</script>

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
