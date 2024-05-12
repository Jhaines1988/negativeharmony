<script lang="ts">
	import {
		generateNegativePairsFromChromaticScale,
		circleOfFifths,
		majorScales,
		majorScalesReflections,
		generateNegativesFromCircleOfFifths
	} from '../utility/musicDataUtilities';
	import {
		getNoteElementsForDrawingPairs,
		getNoteValuesFromPairs
	} from '../utility/drawingUtilities';
	import { onMount } from 'svelte';
	export var selectedKey: string;
	export var notes: string[];
	$: scale = majorScales[selectedKey];
	$: reflected = majorScalesReflections[selectedKey];

	onMount(() => {
		console.log(generateNegativesFromCircleOfFifths(notes));
	});

	function onInputChangeHandler(note: string) {}
</script>

<h2>
	Pairs in Negative Harmony for {selectedKey}
</h2>
<table>
	<thead>
		<tr>
			<th>"Positive" Note</th>

			<th>"Negative" Note</th>
		</tr>
	</thead>
	<tbody>
		{#each scale as note, index}
			<tr>
				<td>{note}</td>
				<td>{reflected[index]}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		border-collapse: collapse;
		border: 1px solid black;
		text-align: center;
	}
	th,
	td {
		border: 1px solid black;
	}

	td {
		width: 250px;
	}
</style>
