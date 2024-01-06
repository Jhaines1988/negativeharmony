<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { getNoteElementsForDrawingPairs } from './utility/drawingUtilities';
	export var selectedKey: string;
	export var notes: string[];
	export var rotation: number = 0;
	const dispatch = createEventDispatcher();
	function updateSelectedKey(selectedKey: string) {
		dispatch('keychange', {
			value: selectedKey
		});
	}

	type PositiveNegativeAxisPairs = {
		[key: string]: () => string;
	};

	const positiveNegativeAxisPairs: PositiveNegativeAxisPairs = {
		C: () => 'G',
		'C♯': () => 'G♯',
		G: () => 'D',
		'G♯': () => 'D♯',
		D: () => 'A',
		'D♯': () => 'A♯',
		A: () => 'E',
		'B♭': () => 'F',
		'E♭': () => 'B♭',
		E: () => 'B',
		'A♭': () => 'E♭',
		B: () => 'F♯',
		'D♭': () => 'A♭',
		'G♭': () => 'D♭',
		'F♯': () => 'C♯',
		'B♯': () => 'F♯♯',
		F: () => 'C'
	};

	onMount(() => {
		getNoteElementsForDrawingPairs();
	});

	function getPairLineTransform(note: string): string {
		try {
			const index = notes.indexOf(note);

			const pairIndex = notes.indexOf(positiveNegativeAxisPairs[note]());
			if (typeof pairIndex === 'undefined') {
				throw new Error('pair unfound');
			}
			const angle = (index + pairIndex) * 15 - 90;

			return `rotate(${angle}deg)`;
		} catch (error) {
			console.log(error, 'error');
			console.log('note', note);
		}
		return 'error';
	}
</script>

<div class="wheel" id="wheel" style="transform: translate(-50%, -50%) rotate({rotation}deg);">
	{#each notes as note, index}
		<button
			type="button"
			class="note"
			id="note-{index}"
			style="transform: rotate({-90 + index * 30}deg) translateX(180px)  rotate({90 -
				index * 30 -
				rotation}deg);"
			on:click={() => {
				updateSelectedKey(note);
			}}
		>
			<div class="note-display">
				{note}
			</div>
		</button>

		{#if note === selectedKey}
			<div class="line" style="transform: {getPairLineTransform(selectedKey)};"></div>
		{/if}
	{/each}
</div>
<svg
	id="lineSvg"
	style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;"
>
	<line id="line-0" stroke-opacity="0.5" stroke="black" stroke-width="2" />
	<line id="line-2" stroke="black" stroke-width="2" />
	<line id="line-4" stroke="black" stroke-width="2" />
	<line id="line-6" stroke="black" stroke-width="2" />
	<line id="line-8" stroke="black" stroke-width="2" />
	<line id="line-10" stroke="black" stroke-width="2" />
</svg>

<style>
	.wheel {
		width: 500px;
		height: 500px;
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
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background-color: lightblue;
		text-align: center;
		line-height: 60px;
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
		z-index: -1;
	}
</style>
