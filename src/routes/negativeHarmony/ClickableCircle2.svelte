<script lang="ts">
	import { onMount } from 'svelte';

	// Define a type for the position
	type Position = {
		x: number;
		y: number;
	};

	// Function to get the center position of an element
	function getElementPosition(element: HTMLElement): Position {
		const rect = element.getBoundingClientRect();
		console.log('RECT=', rect);
		return {
			x: rect.left + window.scrollX + rect.width / 2,
			y: rect.top + window.scrollY + rect.height / 2
		};
	}

	// Function to draw a line between two positions
	function drawLine(x1: number, y1: number, x2: number, y2: number): void {
		const line = document.getElementById('line');

		if (line instanceof SVGLineElement) {
			line.setAttribute('x1', x1.toString());
			line.setAttribute('y1', y1.toString());
			line.setAttribute('x2', x2.toString());
			line.setAttribute('y2', y2.toString());
		} else {
			console.error('Element with id "line" is not an SVGLineElement');
		}
	}

	onMount(() => {
		const element1 = document.getElementById('element1') as HTMLElement;
		const element2 = document.getElementById('element2') as HTMLElement;

		const pos1 = getElementPosition(element1);
		const pos2 = getElementPosition(element2);

		drawLine(pos1.x, pos1.y, pos2.x, pos2.y);
	});
</script>

<!-- HTML and SVG markup -->
<!-- <svg
	id="lineSvg"
	style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;"
>
	<line id="line" stroke="black" stroke-width="2" />
</svg>

<div id="element1">Element 1</div>

<div class="container">
	<div id="element2">Element 2</div>
</div> -->

<div class="grid-container">
	<div class="tonic">C</div>
	<div class="fifth">G</div>
	<div class="second">D</div>
	<div class="sixth">A</div>
	<div class="third">E</div>
</div>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(13, 1fr);
		grid-template-rows: repeat(16, 1fr);
		gap: 10px;
		height: 500px;
		justify-items: center;
		align-items: center;
	}

	.tonic {
		grid-column: 7;
		grid-row: 2;
	}
	.fifth {
		grid-column: 8;
		grid-row: 3;
	}
	.second {
		grid-column: 9;
		grid-row: 4;
		justify-self: left;
	}

	.sixth {
		grid-column: 9;
		grid-row: 5;
	}

	.third {
		grid-column: 9;
		grid-row: 6;
	}
</style>
