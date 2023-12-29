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