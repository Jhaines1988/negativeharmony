<script lang="ts">
	var circleOfFifths = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'Ab', 'Eb', 'Bb', 'F'];
	const sharpKeys: string[] = [
		'C',
		'G',
		'G#',
		'G♯',
		'D',
		'D#',
		'D♯',
		'A',
		'A#',
		'A♯',
		'E',
		'B',
		'F#',
		'F♯',
		'C♯',
		'C#'
	];
	const flatKeys: string[] = ['F', 'Bb', 'B♭', 'Eb', 'E♭', 'Ab', 'A♭', 'Db', 'D♭', 'Gb', 'G♭'];
	var chromaticScaleSharp = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
	var chromaticScaleFlat = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'Cb'];
	var circle: string[] = circleOfFifths;
	var currentChromaticScale: string[] = chromaticScaleSharp;
	var currentKey: string = 'C';
	var currentChromaticPair: string[] = generateNegativeChromaticPairArray(currentChromaticScale);

	function assignSharpOrFlatChromaticScale(scalePattern: string[]) {
		if (sharpKeys.includes(currentKey)) {
			scalePattern = chromaticScaleSharp;
		} else {
			scalePattern = chromaticScaleFlat;
		}
		return scalePattern;
	}

	function generateNegativeChromaticPairArray(chromaticArray: string[]): string[] {
		const negativePairs = [];
		negativePairs[0] = chromaticArray[7];
		negativePairs[1] = chromaticArray[6];
		negativePairs[2] = chromaticArray[5];
		negativePairs[3] = chromaticArray[4];
		negativePairs[4] = chromaticArray[3];
		negativePairs[5] = chromaticArray[2];
		negativePairs[6] = chromaticArray[1];
		negativePairs[7] = chromaticArray[0];
		negativePairs[8] = chromaticArray[11];
		negativePairs[9] = chromaticArray[10];
		negativePairs[10] = chromaticArray[9];
		negativePairs[11] = chromaticArray[8];

		return negativePairs;
	}
	function generateNegativePairsFromChromaticScale(
		chromaticArray: string[]
	): Record<string, string> {
		var darkSideOfCircle = chromaticArray.slice(10).concat(chromaticArray.slice(0, 4));
		var lightSideOfCircle = chromaticArray.slice(4, 10);
		lightSideOfCircle.reverse();
		const pairDictionary: Record<string, string> = {};
		for (let i = 0; i < darkSideOfCircle.length; i++) {
			const noteValue = darkSideOfCircle[i];
			pairDictionary[noteValue] = lightSideOfCircle[i];
		}

		return pairDictionary;
	}

	function rebuildScalePattern(note: string, scalePattern: string[]): string[] {
		return scalePattern
			.slice(scalePattern.indexOf(note))
			.concat(scalePattern.slice(0, scalePattern.indexOf(note)));
	}

	function onInputChangeHandler(note: string) {
		currentKey = note.slice(0, 1).toUpperCase().concat(note.slice(1));
		currentChromaticScale = rebuildScalePattern(
			currentKey,
			assignSharpOrFlatChromaticScale(currentChromaticScale)
		);
		currentChromaticPair = generateNegativeChromaticPairArray(currentChromaticScale);
	}
	/*
	{#each notes as note, index}
		<div
			class="note"
			style="transform: rotate({-90 + index * 30}deg) translateX(120px) rotate({90 -
				index * 30 -
				rotation}deg);"
			on:click={() => selectKey(note)}
		>
			{note}
		</div>

		{#if negativeHarmonyPairs[note]}
			{console.log('negative', negativeHarmonyPairs[note])}
			<div class="line" style="transform: {getPairLineTransform(note)};"></div>
		{/if}
	{/each}
*/
</script>

<input type="text" bind:value={currentKey} on:input={() => onInputChangeHandler(currentKey)} />
<h2>Chromatic Pairs in Negative Harmony for {currentKey}</h2>
<table>
	<thead>
		<tr>
			<th>Note</th>

			<th>Negative Pair</th>
		</tr>
	</thead>
	<tbody>
		{#each currentChromaticScale as note, index}
			<tr>
				<td>{note}</td>
				<td>{currentChromaticPair[index]}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		border-collapse: collapse;
		border: 1px solid black;
	}
	th,
	td {
		border: 1px solid black;
	}
</style>
