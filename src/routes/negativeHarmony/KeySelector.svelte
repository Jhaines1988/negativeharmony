<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { circleOfFifths } from './utility/musicDataUtilities';

	export var selectedKey: string;
	export let preferSharps = true; // User preference for sharps or flats

	const dispatch = createEventDispatcher();
	function updateSelectedKey(selectedKey: string) {
		dispatch('keychange', {
			value: selectedKey
		});
	}

	function updatePrefersSharps(preference: boolean) {
		preferSharps = preference;
		dispatch('notationpreference', {
			value: selectedKey,
			preference: preferSharps
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
<label>
	<input
		type="radio"
		on:change={() => updatePrefersSharps(true)}
		bind:group={preferSharps}
		value={true}
	/> Prefer Sharps
</label>
<label>
	<input
		type="radio"
		on:change={() => updatePrefersSharps(false)}
		bind:group={preferSharps}
		value={false}
	/> Prefer Flats
</label>
