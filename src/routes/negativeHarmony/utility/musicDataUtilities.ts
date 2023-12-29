
export const circleOfFifths: { [key: string]: string[] } = {
    C: ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'Db', 'Ab', 'Eb', 'Bb', 'F'],
    // "B#": ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'Db', 'Ab', 'Eb', 'Bb', 'F'],
    'C#': ['C#', 'G#', 'D#', 'A#', 'E#', 'B#', 'F𝄪', "D", "A", "E", "B", "F#"],
    Db: ['C', 'G', 'D', 'A', 'E', 'B', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F'],
    D: ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'G#', 'Eb', 'Bb', 'F'],
    // "D#": ['C', 'G', 'D', 'A', 'E', 'B', 'F#/Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F'],
    Eb: ['C', 'G', 'D', 'A', 'E', 'B', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F'],
    E: ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'G#', 'D#', 'A#', 'F'],
    F: ['C', 'G', 'D', 'A', 'E', 'B', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F'],
    'F#': ['C#', 'G#', 'D#', 'A#', 'E#', 'B#', 'G', 'D', 'A', 'E', 'B', 'F#',],
    // 'F#/Gb': ['C#', 'G#', 'D#', 'A#', 'E#', 'B#', 'G', 'D', 'A', 'E', 'B', 'F#',],
    Gb: ['C', 'G', 'D', 'A', 'E', 'B', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F'],
    G: ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'Ab', 'Eb', 'Bb', 'F'],
    "G#": ['C#', "G#", 'D#', 'A#', 'E#', 'B#', 'F𝄪', 'D', 'A', 'E', 'B', 'F#'],
    Ab: ['C', 'G', 'D', 'A', 'E', 'B', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F'],
    A: ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'G#', 'D#', 'Bb', 'F'],
    Bb: ['C', 'G', 'D', 'A', 'E', 'B', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F'],
    B: ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'G#', 'D#', 'A#', 'F']
};

export const majorScales: { [key: string]: string[] } = {
    C: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    'C#': ['C#', 'D#', 'F', 'F#', 'G#', 'A#', 'C'],
    Db: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
    D: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
    Eb: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
    E: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
    F: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
    'F#': ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'F'],
    Gb: ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F'],
    G: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
    Ab: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
    A: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
    Bb: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
    B: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#']
};



export const enharmonicKeys: string[] = ['G#', 'D#', 'A#', 'B#', 'E#', 'Fb', 'Cb', 'F𝄪'];
export const harmonicEquivalents: string[] = ['Ab', 'Eb', 'Bb', 'C', 'F', 'E', 'B', 'G'];

export function filterSelectedKeyForEnharmonics(selectedKey: string): string {
    const index = enharmonicKeys.indexOf(selectedKey);
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
 */