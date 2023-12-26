<script lang="ts">
	interface StringMap {
		[key: string]: string;
	}
	let tonic: string = '';
	let majorScale: string[] = [];
	let errorMessage: string | null = null;
	let keys: StringMap = {
		C: 'C D E F G A B',
		'C#': 'C# D# E# F# A# B#',
		'D♭': 'D♭ E♭ F G♭ A♭ B♭ C',
		Db: 'D♭ E♭ F G♭ A♭ B♭ C',
		D: 'D E F# G A B C# ',
		'E♭': 'E♭ F G A♭ B♭ C D',
		Eb: 'E♭ F G A♭ B♭ C D',
		E: 'E F# G# A B C# D#',
		F: 'F G A B♭ C D E',
		'F#': 'F# G# A# B C# D# E#',
		'G♭': 'G♭ A♭ B♭ C♭ D♭ E♭ F',
		Gb: 'G♭ A♭ B♭ C♭ D♭ E♭ F',
		G: 'G A B C D E F#',
		'G#': 'G# A# B# C# D# E# F##',
		A: 'A B C# D E F# G#',
		Ab: 'A♭ B♭ C D♭ E♭ F G',
		'A♭': 'A♭ B♭ C D♭ E♭ F G',
		'B♭': 'B♭ C D E♭ F G♭ A',
		Bb: 'B♭ C D E♭ F G♭ A'
	};

	function buildMajorScale(tonic: string): string[] {
		// Chromatic scale with both 'b' and '♭' representations for flats
		const chromaticScale: string[] = [
			'C',
			'C#',
			'Db',
			'D♭',
			'D',
			'D#',
			'Eb',
			'E♭',
			'E',
			'F',
			'F#',
			'Gb',
			'G',
			'G#',
			'Ab',
			'A♭',
			'A',
			'A#',
			'Bb',
			'B♭',
			'B'
		];
		// Example usage
		let keys: StringMap = {
			C: 'C D E F G A B',
			'C#': 'C# D# E# F# A# B#',
			'D♭': 'D♭ E♭ F G♭ A♭ B♭ C',
			Db: 'D♭ E♭ F G♭ A♭ B♭ C',
			D: 'D E F# G A B C# ',
			'E♭': 'E♭ F G A♭ B♭ C D',
			Eb: 'E♭ F G A♭ B♭ C D',
			E: 'E F# G# A B C# D#',
			F: 'F G A B♭ C D E',
			'F#': 'F# G# A# B C# D# E#',
			'G♭': 'G♭ A♭ B♭ C♭ D♭ E♭ F',
			Gb: 'G♭ A♭ B♭ C♭ D♭ E♭ F',
			G: 'G A B C D E F#',
			'G#': 'G# A# B# C# D# E# F##',
			A: 'A B C# D E F# G#',
			Ab: 'A♭ B♭ C D♭ E♭ F G',
			'A♭': 'A♭ B♭ C D♭ E♭ F G',
			'B♭': 'B♭ C D E♭ F G♭ A',
			Bb: 'B♭ C D E♭ F G♭ A'
		};

		const scaleSteps: number[] = [2, 2, 1, 2, 2, 2, 1]; // Whole, Whole, Half, Whole, Whole, Whole, Half

		let scale: string[] = [];
		let tonicUpper: string = tonic.slice(0, 1).toUpperCase().replace('♭', 'b'); // Normalize the flat symbol to 'b'
		let currentIndex: number = chromaticScale.indexOf(tonicUpper);

		if (currentIndex === -1) {
			throw new Error('Invalid tonic note');
		}

		// Add the tonic to the scale first
		scale.push(chromaticScale[currentIndex]);

		// Generate the rest of the scale
		for (let step of scaleSteps) {
			currentIndex = (currentIndex + step) % chromaticScale.length;
			scale.push(chromaticScale[currentIndex]);
		}

		// Remove the last note to maintain the scale length of 7 notes
		scale.pop();

		return scale;
	}

	function generateScale() {
		let keyIndentifier: string = tonic.slice(0, 1).toUpperCase().concat(tonic.slice(1));
		try {
			// Updated regex to match notes with uppercase/lowercase, sharp (#), flat 'b', and flat symbol '♭'
			if (!tonic || !/^[a-gA-G](#|b|♭)?$/.test(tonic.trim())) {
				throw new Error('Please enter a valid tonic note (e.g., C, c#, D♭, Eb, E♭)');
			}
			majorScale = keys[keyIndentifier].split('');
			errorMessage = null;
		} catch (error) {
			majorScale = [];
			errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
		}
	}
</script>

<input type="text" bind:value={tonic} placeholder="Enter tonic note (e.g., C, c#, D♭, E♭)" />
<button on:click={generateScale}>Generate Major Scale</button>

{#if errorMessage}
	<p class="error">{errorMessage}</p>
{:else if majorScale.length > 0}
	<p>Major Scale: {majorScale.join(' ')}</p>
{/if}
