<script lang="ts">
	import { onMount } from 'svelte';
	const negativeHarmonyKeyPairs: NegativeHarmonyKeyPairing = {
		C: [
			['C', 'D', 'E', 'F', 'G', 'A', 'B'],
			['G', 'F', 'Eb', 'D', 'C', 'Bb', 'Ab']
		],
		c: []
	};

	const negativeHarmonyPairs: NegativeHarmonyPairs = {
		C: 'G',
		G: 'D',
		F: 'C',
		D: 'A',
		Bb: 'F',
		A: 'E',
		Eb: 'Bb',
		E: 'B',
		Ab: 'Eb',
		B: 'F#',
		Db: 'Ab',
		Gb: 'Db'
	};
	const negativeHarmonyPairsFlat: NegativeHarmonyPairs = {
		C: 'G',
		G: 'D',
		F: 'C',
		D: 'A',
		Bb: 'F',
		A: 'E',
		Eb: 'Bb',
		E: 'B',
		Ab: 'Eb',
		B: 'F#',
		Db: 'Ab',
		Gb: 'Db'
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
	let rotation: number = 0;
	let selectedKey: string = 'C';
	var notes: string[] = ['C', 'G', 'D', 'A', 'E', 'B', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F'];
	// Defines the pairs of notes for negative harmony. The key is a note, the value is its negative harmony counterpart.
	type NegativeHarmonyPairs = {
		[key: string]: string;
	};

	type NegativeHarmonyKeyPairing = {
		[key: string]: string[][];
	};

	type Position = {
		x: number;
		y: number;
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

	function calculateRotationForKey(key: string): number {
		const index = notes.indexOf(key);
		return -index * 30;
	}

	function selectKey(key: string): void {
		selectedKey = key;
		console.log('KEY', key);

		switch (selectedKey) {
			case 'C':
			case 'F':
				notes = ['C', 'G', 'D', 'A', 'E', 'B', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F'];
				break;
			case 'G':
				notes = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'Db', 'Ab', 'Eb', 'Bb', 'F'];
				break;
			case 'B':
				notes = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'G#', 'D#', 'A#', 'F'];
				break;
		}

		rotation = calculateRotationForKey(key);
	}
	function getNoteElementsForDrawingPairs(): void {
		var n0 = document.getElementById('note-0');
		var n1 = document.getElementById('note-1');
		var n11 = document.getElementById('note-11');
		var n2 = document.getElementById('note-2');
		var n10 = document.getElementById('note-10');
		var n3 = document.getElementById('note-3');
		var n9 = document.getElementById('note-9');
		var n4 = document.getElementById('note-4');
		var n8 = document.getElementById('note-8');
		var n5 = document.getElementById('note-5');
		var n7 = document.getElementById('note-7');
		var n6 = document.getElementById('note-6');
		var pairs = [n0, n1, n11, n2, n10, n3, n9, n4, n8, n5, n7, n6];
		for (let i = 0; i < pairs.length; i += 2) {
			const element = pairs[i];
			const element2 = pairs[i + 1];
			const position1 = getElementPosition(element as HTMLElement);
			const position2 = getElementPosition(element2 as HTMLElement);
			drawLine(position1.x, position1.y, position2.x, position2.y, i);
		}
	}
	onMount(() => {
		rotation = calculateRotationForKey(selectedKey);
		getNoteElementsForDrawingPairs();
	});

	function getAxisLineTransform(): string {
		const index = notes.indexOf(selectedKey);
		const fifthIndex = (index + 1) % notes.length; // Index of the fifth note
		const angle = (index + fifthIndex) * 15 - 90; // Average angle of the selected key and its fifth
		return `rotate(${angle}deg)`;
	}

	function getPairLineTransform(note: string): string {
		const index = notes.indexOf(note);
		// console.log('NOTE', note, 'INDEX', index);
		const pairIndex = notes.indexOf(negativeHarmonyPairs[note]);
		// console.log('PAIR INDEX = notes.indexOF(negativeHarmonyPairs[note]', pairIndex);
		const angle = (index + pairIndex) * 15 - 90;
		// console.log('ANGLE index + pairIndex * 15 - 90', angle);
		return `rotate(${angle}deg)`;
	}

	// Function to get the center position of an element
	function getElementPosition(element: HTMLElement): Position {
		const rect = element.getBoundingClientRect();
		return {
			x: rect.left + window.scrollX + rect.width / 2,
			y: rect.top + window.scrollY + rect.height / 2
		};
	}
	function drawLine(x1: number, y1: number, x2: number, y2: number, lineIndex: number): void {
		const line = document.getElementById('line-' + lineIndex);

		if (line instanceof SVGLineElement) {
			line.setAttribute('x1', x1.toString());
			line.setAttribute('y1', y1.toString());
			line.setAttribute('x2', x2.toString());
			line.setAttribute('y2', y2.toString());
		} else {
			console.error('Element with id "line" is not an SVGLineElement');
		}
	}
</script>

<input type="text" bind:value={selectedKey} on:input={() => selectKey(selectedKey)} />
<div class="wheel" style="transform: translate(-50%, -50%) rotate({rotation}deg);">
	{#each notes as note, index}
		<div
			tabindex="0"
			role="button"
			class="note"
			id="note-{index}"
			style="transform: rotate({-90 + index * 30}deg) translateX(120px) rotate({90 -
				index * 30 -
				rotation}deg);"
			on:click={() => selectKey(note)}
		>
			<span>
				{note}
			</span>
		</div>

		{#if note === selectedKey}
			<!-- <div class="line" style="transform: {getAxisLineTransform()};"></div> -->
			<div class="line" style="transform: {getPairLineTransform(selectedKey)};"></div>
		{/if}
	{/each}
</div>
<svg
	id="lineSvg"
	style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;"
>
	<line id="line-0" stroke-opacity="0.5" stroke="black" stroke-width="2" />
	<line id="line-2" stroke="red" stroke-width="2" />
	<line id="line-4" stroke="red" stroke-width="2" />
	<line id="line-6" stroke="red" stroke-width="2" />
	<line id="line-8" stroke="red" stroke-width="2" />
	<line id="line-10" stroke="red" stroke-width="2" />
</svg>

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
		z-index: 20;
	}
	.line {
		position: absolute;
		height: 2px;
		width: 100%;
		background-color: rgb(16, 19, 16);
		top: 50%;
		left: 0;
	}
	line {
		z-index: 22;
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
