export var circleOfFifths = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'Ab', 'Eb', 'Bb', 'F'];
export var chromaticScaleSharp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
export var chromaticScaleFlat = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

export function generateNegativePairsFromChromaticScale(
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

export function rebuildCircleOfFifth(note: string) {
	return circleOfFifths.slice(circleOfFifths.indexOf(note)).concat(circleOfFifths.slice(0, circleOfFifths.indexOf(note)))
}

export function generateSeventhChords(scale: string[]): string[] {
	const chords: string[] = [];
	const scaleLength: number = scale.length;

	for (let i = 0; i < scaleLength; i++) {
		// Chord notes are the first, third, fifth, and seventh notes from the scale root
		const firstNote = scale[i];
		const thirdNote = scale[(i + 2) % scaleLength];
		const fifthNote = scale[(i + 4) % scaleLength];
		const seventhNote = scale[(i + 6) % scaleLength];

		const chord = firstNote + thirdNote + fifthNote + seventhNote;
		chords.push(chord);
	}

	return chords;
}

// Example usage
const cMajorScale: string[] = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];




/*

Triaids
CEG => C Eb G
I => i 
DFA => FDBb
ii => bVII

EGB => Eb C Ab 
iii => bVI

FAC => D Bb G
IV => v 

GBD => C Ab F
V => iv

ACE => Bb G Eb 
vi => bIII 

BDF => Ab F D 
viidim  => iidim


Seventh chords 

CEGB => G Eb C Ab
Imaj7 => bVI Maj 7

DFAC => F D Bb G 
ii -7 => v -7 

EGBD => Eb C Ab F 

iii -7 => iv -7 

FACE => D Bb G Eb 

IVmaj7 => bIII maj7

GBDF => C Ab F D 
V7 => iv -6 || ii-7b5


ACEG => BbG Eb C

vi-7 =>  i -7 || bIII maj 6


BDFA => Ab F D Bb
vii-7b5 => bVII7 
*/