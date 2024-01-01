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
