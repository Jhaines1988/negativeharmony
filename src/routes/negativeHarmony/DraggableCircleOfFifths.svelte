<script lang="ts">
	import { onMount } from 'svelte';

	let rotation: number = 0;
	let selectedKey: string = 'C';
	const notes: string[] = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'Ab', 'Eb', 'Bb', 'F'];
	// Defines the pairs of notes for negative harmony. The key is a note, the value is its negative harmony counterpart.
	type NegativeHarmonyPairs = {
		[key: string]: string;
	};

	type NegativeHarmonyKeyPairing = {
		[key: string]: string[][];
	};

	// function translateToNegativeHarmony(majoryScaleArray: string[]): string[] {
	// 	const negativePair = new Array(majoryScaleArray.length);

	// 	for (let i = 0; i < majoryScaleArray.length; i++) {
	// 		switch (i) {
	// 			case 0:
	// 				negativePair[4] = majoryScaleArray[i];
	// 				break;
	// 			case 1:
	// 			  negativePair[]
	// 		}
	// 	}
	// }
	const negativeHarmonyKeyPairs: NegativeHarmonyKeyPairing = {
		C: [
			['C', 'D', 'E', 'F', 'G', 'A', 'B'],
			['G', 'F', 'Eb', 'D', 'C', 'Bb', 'Ab']
		],
		c: []
	};

	const negativeHarmonyPairs: NegativeHarmonyPairs = {
		C: 'G',
		G: 'C',
		F: 'D',
		D: 'F',
		Bb: 'A',
		A: 'Bb',
		Eb: 'E',
		E: 'Eb',
		Ab: 'B',
		B: 'Ab',
		'C#': 'F#',
		'F#': 'Db'
	};
	const cMajorPairs: NegativeHarmonyPairs = {
		C: 'G',
		G: 'C',
		F: 'D',
		D: 'F',
		Bb: 'A',
		A: 'Bb',
		Eb: 'E',
		E: 'Eb',
		Ab: 'B',
		B: 'Ab',
		'C#': 'F#',
		'F#': 'Db'
	};
	const fMajorPairs: NegativeHarmonyPairs = {
		F: 'C',
		C: 'F',
		G: 'Bb',
		D: 'Eb',
		A: 'Ab',
		E: 'Db',
		B: 'F#',
		'F#': 'B',
		Db: 'E',
		Ab: 'A',
		Eb: 'D',
		Bb: 'G'
	};
	function calculateRotationForKey(key: string): number {
		const index = notes.indexOf(key);
		return -index * 30;
	}

	function selectKey(key: string): void {
		selectedKey = key;
		rotation = calculateRotationForKey(key);
	}

	onMount(() => {
		rotation = calculateRotationForKey(selectedKey);
	});

	function getAxisLineTransform(): string {
		const index = notes.indexOf(selectedKey);
		const fifthIndex = (index + 1) % notes.length; // Index of the fifth note
		const angle = (index + fifthIndex) * 15 - 90; // Average angle of the selected key and its fifth
		return `rotate(${angle}deg)`;
	}

	function getPairLineTransform(note: string): string {
		const index = notes.indexOf(note);
		console.log('NOTE', note, 'INDEX', index);
		const pairIndex = notes.indexOf(negativeHarmonyPairs[note]);
		console.log('PAIR INDEX = notes.indexOF(negativeHarmonyPairs[note]', pairIndex);
		const angle = (index + pairIndex) * 15 - 90;
		console.log('ANGLE index + pairIndex * 15 - 90', angle);
		return `rotate(${angle}deg)`;
	}
</script>

<input type="text" bind:value={selectedKey} on:input={() => selectKey(selectedKey)} />
<div class="wheel" style="transform: translate(-50%, -50%) rotate({rotation}deg);">
	<!-- <div class="pair tonic-fifth-line"></div>
	<div class="pair fourth-second-line"></div>
	<div class="pair flat-seven-sixth-line"></div>
	<div class="pair flat-third-third-line"></div>
	<div class="pair flat-sixth-seventh-line"></div>
	<div class="pair flat-second-sharp-fourth-line"></div> -->
	<!-- <div class="tonic-fifth-line" style="transform: {getAxisLineTransform()};"></div> -->

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
</div>

<style>
	.wheel {
		width: 300px;
		height: 300px;
		border-radius: 50%;
		background-color: #f0f0f0;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.3s ease-out;
	}

	.note {
		position: absolute;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: lightblue;
		text-align: center;
		line-height: 40px;
		font-weight: bold;
	}
	.line {
		position: absolute;
		height: 2px;
		width: 100%;
		background-color: rgb(4, 192, 42);
		top: 50%;
		left: 0;
	}

	.tonic-fifth-line {
		transform: rotate(12deg);
		transform: rotate(15deg);
		position: absolute;
		height: 2px;
		width: 90%;
		background-color: #ef0a0a;
		top: 12%;
		left: 15%;
	}
	.fourth-second-line {
		transform: rotate(15deg);
		position: absolute;
		height: 2px;
		width: 100%;
		background-color: #ef0a0a;
		top: 23%;
		left: 7%;
	}
	.flat-seven-sixth-line {
		transform: rotate(15deg);
		position: absolute;
		height: 2px;
		width: 108%;
		background-color: #ef0b0a;
		top: 39%;
		left: 0%;
	}
	.flat-third-third-line {
		transform: rotate(14deg);
		position: absolute;
		height: 2px;
		width: 111%;
		background-color: #ef0b0a;
		top: 60%;
		left: -5%;
	}
	.flat-sixth-seventh-line {
		transform: rotate(14deg);
		position: fixed;
		height: 2px;
		width: 108%;
		background-color: #ef0b0a;
		top: 79%;
		left: -6%;
	}
	.flat-second-sharp-fourth-line {
		transform: rotate(14deg);
		position: absolute;
		height: 2px;
		width: 106%;
		background-color: #ef0b0a;
		top: 89%;
		left: -9%;
	}
</style>
