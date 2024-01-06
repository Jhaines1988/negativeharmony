// let keys: StringMap = {
// 	C: 'C D E F G A B',
// 	'C#': 'C# D# E# F# A# B#',
// 	'D♭': 'D♭ E♭ F G♭ A♭ B♭ C',
// 	Db: 'D♭ E♭ F G♭ A♭ B♭ C',
// 	D: 'D E F# G A B C# ',
// 	'E♭': 'E♭ F G A♭ B♭ C D',
// 	Eb: 'E♭ F G A♭ B♭ C D',
// 	E: 'E F# G# A B C# D#',
// 	F: 'F G A B♭ C D E',
// 	'F#': 'F# G# A# B C# D# E#',
// 	'G♭': 'G♭ A♭ B♭ C♭ D♭ E♭ F',
// 	Gb: 'G♭ A♭ B♭ C♭ D♭ E♭ F',
// 	G: 'G A B C D E F#',
// 	'G#': 'G# A# B# C# D# E# F##',
// 	A: 'A B C# D E F# G#',
// 	Ab: 'A♭ B♭ C D♭ E♭ F G',
// 	'A♭': 'A♭ B♭ C D♭ E♭ F G',
// 	'B♭': 'B♭ C D E♭ F G♭ A',
// 	Bb: 'B♭ C D E♭ F G♭ A'
// };

/*
function getAllNoteDisplayElements(selectedKey: string) {
        var allNotes: HTMLCollection = document.getElementsByClassName('note-display');
        var notesInSelectedKey = circleOfFifths[selectedKey];

        Array.from(allNotes).forEach((note, index) => {
            note.innerHTML = notesInSelectedKey[index];
        });
    }
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
*/


// export function calculateRotationForKey(currentRotation: number, key: string, notes: string[]): number {
//     const index = notes.indexOf(key);
//     const targetRotation = -index * 30;
//     const normalizedCurrentRotation = currentRotation % 360;

//     let clockwiseDistance, counterclockwiseDistance;

//     if (targetRotation >= normalizedCurrentRotation) {
//         clockwiseDistance = targetRotation - normalizedCurrentRotation;
//         counterclockwiseDistance = normalizedCurrentRotation + 360 - targetRotation;
//     } else {
//         clockwiseDistance = 360 - normalizedCurrentRotation + targetRotation;
//         counterclockwiseDistance = normalizedCurrentRotation - targetRotation;
//     }

//     if (clockwiseDistance < counterclockwiseDistance) {
//         return normalizedCurrentRotation + clockwiseDistance;
//     } else {
//         return normalizedCurrentRotation - counterclockwiseDistance;
//     }
// }
// This variable holds the current rotation of the circle
/*const sharpKeys: string[] = [
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
*/