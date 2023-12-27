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

