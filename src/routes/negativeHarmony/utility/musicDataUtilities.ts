
export const circleOfFifths: { [key: string]: string[] } = {
    C: ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    // 'C♯': ['1', '5', '2', '6', '3', '7', '♯4', '♭2', '♭6', '♭3', '♭7', '♭4'],
    "C♯": ['C', 'F𝄪', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'A♯', 'E♯'],
    "D♭": ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    D: ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'E♭', 'B♭', 'F'],
    "E♭": ['C', 'G', 'D', 'A', 'F♭', 'C♭', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    E: ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'A♯', 'F'],
    F: ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    'F♯': ['B♯', 'G', 'D', 'A', 'E', 'B', "F♯", 'C♯', 'G♯', 'D♯', 'A♯', 'E♯',],
    "G♭": ['D♭♭', 'A♭♭', 'E♭♭', 'B♭♭', 'F♭', 'C♭', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    G: ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'A♭', 'E♭', 'B♭', 'F'],
    "G♯": ['C#', "G♯", 'D♯', 'A♯', 'E♯', 'B♯', 'F𝄪', 'D', 'A', 'E', 'B', 'F♯'],
    "A♭": ['C', 'G', 'D', 'B♭♭', 'F♭', 'C♭', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    A: ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'B♭', 'F'],
    "B♭": ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    B: ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'A♯', 'F']
};

// export const majorScales: { [key: string]: string[] } = {
//     C: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
//     'C♯': ['C♯', 'D♯', 'F', 'F♯', 'G♯', 'A♯', 'C'],
//     D♭: ['D♭', 'E♭', 'F', 'G♭', 'A♭', 'B♭', 'C'],
//     D: ['D', 'E', 'F♯', 'G', 'A', 'B', 'C♯'],
//     E♭: ['E♭', 'F', 'G', 'A♭', 'B♭', 'C', 'D'],
//     E: ['E', 'F♯', 'G♯', 'A', 'B', 'C♯', 'D♯'],
//     F: ['F', 'G', 'A', 'B♭', 'C', 'D', 'E'],
//     'F♯': ['F♯', 'G♯', 'A♯', 'B', 'C♯', 'D♯', 'F'],
//     G♭: ['G♭', 'A♭', 'B♭', 'C♭', 'D♭', 'E♭', 'F'],
//     G: ['G', 'A', 'B', 'C', 'D', 'E', 'F♯'],
//     A♭: ['A♭', 'B♭', 'C', 'D♭', 'E♭', 'F', 'G'],
//     A: ['A', 'B', 'C♯', 'D', 'E', 'F♯', 'G♯'],
//     B♭: ['B♭', 'C', 'D', 'E♭', 'F', 'G', 'A'],
//     B: ['B', 'C♯', 'D♯', 'E', 'F♯', 'G♯', 'A♯']
// };



const enharmonicKeys: string[] = ['D♯', 'A♯', 'B♯', 'E♯', 'F♭', 'C♭', 'F𝄪', 'B♭♭', 'E♭♭', 'A♭♭', 'D♭♭'];
const harmonicEquivalents: string[] = ['E♭', 'B♭', 'C', 'F', 'E', 'B', 'G', "A", "D", "G", "C"];

export function filterSelectedKeyForEnharmonics(selectedKey: string): string {
    const index = enharmonicKeys.indexOf(selectedKey);
    console.log("INDEX", index, selectedKey)
    if (index >= 0) {
        selectedKey = harmonicEquivalents[index];
        console.log("SELECTGED KEY", selectedKey)
    }
    return selectedKey;
}


/**
 * 	function buildMajorScale(tonic: string): string[] {
        // Chromatic scale with both 'b' and '♭' representations for flats
        const chromaticScale: string[] = [
            'C',
            'C♯',
            'Db',
            'D♭',
            'D',
            'D♯',
            'Eb',
            'E♭',
            'E',
            'F',
            'F♯',
            'Gb',
            'G',
            'G♯',
            'Ab',
            'A♭',
            'A',
            'A♯',
            'Bb',
            'B♭',
            'B'
        ];
        // Example usage
        let keys: StringMap = {
            C: 'C D E F G A B',
            'C♯': 'C♯ D♯ E♯ F♯ A♯ B♯',
            'D♭': 'D♭ E♭ F G♭ A♭ B♭ C',
            Db: 'D♭ E♭ F G♭ A♭ B♭ C',
            D: 'D E F♯ G A B C♯ ',
            'E♭': 'E♭ F G A♭ B♭ C D',
            Eb: 'E♭ F G A♭ B♭ C D',
            E: 'E F♯ G♯ A B C♯ D♯',
            F: 'F G A B♭ C D E',
            'F♯': 'F♯ G♯ A♯ B C♯ D♯ E♯',
            'G♭': 'G♭ A♭ B♭ C♭ D♭ E♭ F',
            Gb: 'G♭ A♭ B♭ C♭ D♭ E♭ F',
            G: 'G A B C D E F♯',
            'G♯': 'G♯ A♯ B♯ C♯ D♯ E♯ F♯♯',
            A: 'A B C♯ D E F♯ G♯',
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
            // Updated regex to match notes with uppercase/lowercase, sharp (♯), flat 'b', and flat symbol '♭'
            if (!tonic || !/^[a-gA-G](♯|b|♭)?$/.test(tonic.trim())) {
                throw new Error('Please enter a valid tonic note (e.g., C, c♯, D♭, Eb, E♭)');
            }
            majorScale = keys[keyIndentifier].split('');
            errorMessage = null;
        } catch (error) {
            majorScale = [];
            errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
        }
    }
 */