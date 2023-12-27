<!-- <script lang="ts">
	let posX: number = 100; // Initial X position
	let posY: number = 100; // Initial Y position
	let dragging: boolean = false;

	function onMouseDown(event: MouseEvent): void {
		dragging = true;
		const target = event.target as HTMLElement;
		posX = event.clientX - target.offsetLeft;
		posY = event.clientY - target.offsetTop;
	}

	function onMouseMove(event: MouseEvent): void {
		if (dragging) {
			const target = event.target as HTMLElement;
			posX = event.clientX - target.offsetWidth / 2;
			posY = event.clientY - target.offsetHeight / 2;
		}
	}

	function onMouseUp(): void {
		dragging = false;
	}
</script>

<div
	class="draggable-circle"
	style="left: {posX}px; top: {posY}px;"
	on:mousedown={onMouseDown}
	on:mousemove={onMouseMove}
	on:mouseup={onMouseUp}
	on:mouseleave={onMouseUp}
></div>

<div class="circle-of-fifths">
	<div class="note">C</div>
	<div class="note">G</div>
	<div class="note">D</div>
	<div class="note">A</div>
	<div class="note">E</div>
	<div class="note">B</div>
	<div class="note">F#</div>
	<div class="note">C#</div>
	<div class="note">Ab</div>
	<div class="note">Eb</div>
	<div class="note">Bb</div>
	<div class="note">F</div>
</div>

<style>
	.draggable-circle {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background-color: #f0f0f0;
		position: absolute;
		cursor: grab;
	}
	.draggable-circle:active {
		cursor: grabbing;
	}
	.circle-of-fifths {
		width: 500px;
		height: 500px;
		border-radius: 50%;
		position: relative;
		margin: 20px;
		border: 1px solid black;
	}

	.note {
		width: 60px;
		height: 60px;
		line-height: 60px;
		border-radius: 50%;
		background-color: #f0f0f0;
		position: absolute;
		text-align: center;
		font-weight: bold;
		font-size: 14px;
		transform-origin: 50% 150px; /* Adjust based on the circle radius */
		border: 1px solid #000;
	}

	/* Positioning each note */
	.note:nth-child(1) {
		transform: rotate(0deg) translateX(150px) rotate(0deg);
	}
	/* .note:nth-child(2) {
		transform: rotate(30deg) translateX(150px) rotate(-30deg);
	}
	.note:nth-child(3) {
		transform: rotate(60deg) translateX(150px) rotate(-60deg);
	}
	.note:nth-child(4) {
		transform: rotate(90deg) translateX(150px) rotate(-90deg);
	}
	.note:nth-child(5) {
		transform: rotate(120deg) translateX(150px) rotate(-120deg);
	}
	.note:nth-child(6) {
		transform: rotate(150deg) translateX(150px) rotate(-150deg);
	}
	.note:nth-child(7) {
		transform: rotate(180deg) translateX(150px) rotate(-180deg);
	}
	.note:nth-child(8) {
		transform: rotate(210deg) translateX(150px) rotate(-210deg);
	}
	.note:nth-child(9) {
		transform: rotate(240deg) translateX(150px) rotate(-240deg);
	}
	.note:nth-child(10) {
		transform: rotate(270deg) translateX(150px) rotate(-270deg);
	}
	.note:nth-child(11) {
		transform: rotate(300deg) translateX(150px) rotate(-300deg);
	}
	.note:nth-child(12) {
		transform: rotate(330deg) translateX(150px) rotate(-330deg);
	}  */
</style> -->

<script lang="ts">
	let isDragging: boolean = false;
	let rotation: number = 0; // Rotation angle in degrees
	let startAngle: number = 0; // Starting angle when dragging begins

	function startDrag(event: MouseEvent): void {
		isDragging = true;
		startAngle = getAngle(event.clientX, event.clientY);
	}

	function onDrag(event: MouseEvent): void {
		if (isDragging) {
			const currentAngle = getAngle(event.clientX, event.clientY);
			rotation += currentAngle - startAngle;
			startAngle = currentAngle;
		}
	}

	function stopDrag(): void {
		isDragging = false;
	}

	function getAngle(x: number, y: number): number {
		const centerX = window.innerWidth / 2;
		const centerY = window.innerHeight / 2;
		return Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
	}
</script>

<div
	class="wheel"
	style="transform: translate(-50%, -50%) rotate({rotation}deg);"
	on:mousedown={startDrag}
	on:mousemove={onDrag}
	on:mouseup={stopDrag}
	on:mouseleave={stopDrag}
>
	<!-- Content of the wheel -->
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
		cursor: grab;
	}
</style>
