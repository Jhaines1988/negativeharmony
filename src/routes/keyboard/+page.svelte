<script lang="ts">
	let audioContext: AudioContext | null = null;

	// Define the type for note objects
	interface Note {
		note: string;
		frequency: number;
	}

	// Note frequencies for two chromatic octaves (C4 to B5)
	const notes = [
		{ note: 'C1', frequency: 32.7 },
		{ note: 'C#1', frequency: 34.65 },
		{ note: 'D1', frequency: 36.71 },
		{ note: 'D#1', frequency: 38.89 },
		{ note: 'E1', frequency: 41.2 },
		{ note: 'F1', frequency: 43.65 },
		{ note: 'F#1', frequency: 46.25 },
		{ note: 'G1', frequency: 49.0 },
		{ note: 'G#1', frequency: 51.91 },
		{ note: 'A1', frequency: 55.0 },
		{ note: 'A#1', frequency: 58.27 },
		{ note: 'B1', frequency: 61.74 },

		{ note: 'C2', frequency: 65.41 },
		{ note: 'C#2', frequency: 69.3 },
		{ note: 'D2', frequency: 73.42 },
		{ note: 'D#2', frequency: 77.78 },
		{ note: 'E2', frequency: 82.41 },
		{ note: 'F2', frequency: 87.31 },
		{ note: 'F#2', frequency: 92.5 },
		{ note: 'G2', frequency: 98.0 },
		{ note: 'G#2', frequency: 103.83 },
		{ note: 'A2', frequency: 110.0 },
		{ note: 'A#2', frequency: 116.54 },
		{ note: 'B2', frequency: 123.47 },

		{ note: 'C3', frequency: 130.81 },
		{ note: 'C#3', frequency: 138.59 },
		{ note: 'D3', frequency: 146.83 },
		{ note: 'D#3', frequency: 155.56 },
		{ note: 'E3', frequency: 164.81 },
		{ note: 'F3', frequency: 174.61 },
		{ note: 'F#3', frequency: 185.0 },
		{ note: 'G3', frequency: 196.0 },
		{ note: 'G#3', frequency: 207.65 },
		{ note: 'A3', frequency: 220.0 },
		{ note: 'A#3', frequency: 233.08 },
		{ note: 'B3', frequency: 246.94 },

		{ note: 'C4', frequency: 261.63 },
		{ note: 'C#4', frequency: 277.18 },
		{ note: 'D4', frequency: 293.66 },
		{ note: 'D#4', frequency: 311.13 },
		{ note: 'E4', frequency: 329.63 },
		{ note: 'F4', frequency: 349.23 },
		{ note: 'F#4', frequency: 369.99 },
		{ note: 'G4', frequency: 392.0 },
		{ note: 'G#4', frequency: 415.3 },
		{ note: 'A4', frequency: 440.0 },
		{ note: 'A#4', frequency: 466.16 },
		{ note: 'B4', frequency: 493.88 },

		{ note: 'C5', frequency: 523.25 } // C one octave higher
	];

	// Function to play the sound
	function playSound(frequency: number): void {
		if (!audioContext) {
			audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
		}

		const oscillator: OscillatorNode = audioContext.createOscillator();
		oscillator.type = 'sawtooth'; // You can experiment with 'square', 'sawtooth', or 'triangle'
		oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
		oscillator.connect(audioContext.destination);
		oscillator.start();
		oscillator.stop(audioContext.currentTime + 1); // Play for 1 second
	}
	const frequencies: { [key: string]: number } = {
		C4: 261.63,
		E4: 329.63,
		G4: 392.0,
		F4: 349.23,
		Ab4: 415.3,
		D5: 587.33
	};

	// Function to play a chord (array of frequencies)
	function playChord(chordFrequencies: number[]): void {
		chordFrequencies.forEach((frequency) => playSound(frequency));
	}

	// C Major chord (C4, E4, G4)
	const C_Major = [frequencies.C4, frequencies.E4, frequencies.G4];

	// F Minor 6 chord (F4, Ab4, C4, D5)
	const Fm6 = [frequencies.F4, frequencies.Ab4, frequencies.C4, frequencies.D5];
</script>

<!-- Keyboard Layout -->
<div class="keyboard">
	{#each notes as { note, frequency }}
		<button
			on:click={() => playSound(frequency)}
			class="key {note.includes('#') ? 'black-key' : 'white-key'}">{note}</button
		>
	{/each}
</div>

<div class="chord-buttons">
	<button on:click={() => playChord(C_Major)}>C Major</button>
	<button on:click={() => playChord(Fm6)}>F Minor 6</button>
</div>

<!-- Simple styles for the keyboard -->
<style>
	.keyboard {
		display: flex;
		gap: 2px;
		justify-content: center;
		flex-wrap: wrap;
	}

	.key {
		height: 200px;
		text-align: center;
		font-size: 14px;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		padding-bottom: 10px;
		border-radius: 5px;
		font-weight: bold;
		cursor: pointer;
	}

	.white-key {
		width: 40px;
		background-color: white;
		border: 2px solid black;
	}

	.black-key {
		width: 30px;
		background-color: black;
		color: white;
		position: relative;
		z-index: 1;
		margin-left: -15px; /* Overlap white keys */
		margin-right: -15px; /* Overlap white keys */
	}

	.black-key:active {
		background-color: gray;
	}

	.white-key:active {
		background-color: lightgray;
	}

	.chord-buttons {
		display: flex;
		gap: 20px;
		justify-content: center;
		margin-top: 50px;
	}

	button {
		padding: 20px;
		font-size: 18px;
		border-radius: 5px;
		background-color: #f0f0f0;
		border: 2px solid #333;
		cursor: pointer;
		transition: background-color 0.2s ease;
	}
</style>
