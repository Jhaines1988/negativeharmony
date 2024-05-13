<script lang="ts">
	import {
		majorScales,
		majorScalesReflections,
		generateNegativesFromCircleOfFifths
	} from '../utility/musicDataUtilities';

	import { onMount } from 'svelte';
	export var selectedKey: string;
	export var notes: string[];
	$: scale = majorScales[selectedKey];
	$: reflected = majorScalesReflections[selectedKey];

	onMount(() => {
		console.log(generateNegativesFromCircleOfFifths(notes), 'imount');
	});

	function onInputChangeHandler(note: string) {}
</script>

<h2>
	<b>
		Pairs in Negative Harmony for {selectedKey}
	</b>
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
		height: 200px;
	}
	th,
	td {
		border: 1px solid black;
	}

	td {
		width: 250px;
	}
	h2 {
		margin: 2rem 0 0.5rem 0;
		flex-basis: 100%;
	}
</style>
