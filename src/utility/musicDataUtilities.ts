
export const maj7 = " △7";
export const min7 = " -7";
export const halfDim7 = " ø7";
export const flat = "♭";
export const dim = 'dim';


export const triadConversions: string[] = ['I-', 'V-', `${flat}VI`, 'V-', 'IV-', `${flat}III`,]

export const circleOfFifths: { [key: string]: string[] } = {
    C: ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    "C♯": ['C', 'F𝄪', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'A♯', 'E♯'],
    "D♭": ['C', 'A♭♭', 'E♭♭', 'B♭♭', 'F♭', 'C♭', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    D: ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'E♭', 'B♭', 'F'],
    "E♭": ['C', 'G', 'D', 'A', 'F♭', 'C♭', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    E: ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'A♯', 'F'],
    F: ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    'F♯': ['B♯', 'G', 'D', 'A', 'E', 'B', "F♯", 'C♯', 'G♯', 'D♯', 'A♯', 'E♯',],
    "G♭": ['D♭♭', 'A♭♭', 'E♭♭', 'B♭♭', 'F♭', 'C♭', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    G: ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'A♭', 'E♭', 'B♭', 'F'],
    "G♯": ['C♯', "G♯", 'D♯', 'A♯', 'E♯', 'B♯', 'F𝄪', 'D', 'A', 'E', 'B', 'F♯'],
    "A♭": ['C', 'G', 'D', 'B♭♭', 'F♭', 'C♭', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    A: ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'B♭', 'F'],
    "B♭": ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    B: ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'A♯', 'F']
};

export const majorScales: { [key: string]: string[] } = {
    C: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    'C♯': ['C♯', 'D♯', 'E♯', 'F♯', 'G♯', 'A♯', 'B♯'],
    'D♭': ['D♭', 'E♭', 'F', 'G♭', 'A♭', 'B♭', 'C'],
    D: ['D', 'E', 'F♯', 'G', 'A', 'B', 'C♯'],
    'E♭': ['E♭', 'F', 'G', 'A♭', 'B♭', 'C', 'D'],
    E: ['E', 'F♯', 'G♯', 'A', 'B', 'C♯', 'D♯'],
    F: ['F', 'G', 'A', 'B♭', 'C', 'D', 'E'],
    'F♯': ['F♯', 'G♯', 'A♯', 'B', 'C♯', 'D♯', 'F'],
    'G♭': ['G♭', 'A♭', 'B♭', 'C♭', 'D♭', 'E♭', 'F'],
    G: ['G', 'A', 'B', 'C', 'D', 'E', 'F♯'],
    'G♯': ['G♯', 'A♯', 'B♯', 'C♯', 'D♯', 'E♯', 'F𝄪'],
    'A♭': ['A♭', 'B♭', 'C', 'D♭', 'E♭', 'F', 'G'],
    A: ['A', 'B', 'C♯', 'D', 'E', 'F♯', 'G♯'],
    'B♭': ['B♭', 'C', 'D', 'E♭', 'F', 'G', 'A'],
    B: ['B', 'C♯', 'D♯', 'E', 'F♯', 'G♯', 'A♯']
};

export const majorScalesReflections: { [key: string]: string[] } = {
    C: ['G', 'F', 'E♭', 'D', 'C', 'B♭', 'A♭'],
    'C♯': ['G♯', 'F♯', 'E', 'D♯', 'C♯', 'B', 'A'],
    'D♭': ['A♭', 'G♭', 'F♭', 'E♭', 'D♭', 'C♭', 'B♭♭'],
    D: ['A', 'G', 'F', 'E', 'D', 'C', 'B♭'],
    'E♭': ['B♭', 'A♭', 'G♭', 'F', 'E♭', 'D♭', 'C♭'],
    E: ['B', 'A', 'G', 'F♯', 'E', 'D', 'C'],
    F: ['C', 'B♭', 'A♭', 'G', 'F', 'E♭', 'D♭'],
    'F♯': ['C♯', 'B♯', 'A', 'G♯', 'F♯', 'E', 'D'],
    'G♭': ['D♭', 'C♭', 'B♭♭', 'A♭', 'G♭', 'F♭', 'E♭♭'],
    G: ['D', 'C', 'B♭', 'A', 'G', 'F', 'E♭'],
    'G♯': ['D♯', 'C♯', 'B', 'A♯', 'G♯', 'F', 'E'],
    'A♭': ['E♭', 'D♭', 'C♭', 'B♭', 'A♭', 'G♭', 'F♭'],
    A: ['E', 'D', 'C', 'B', 'A', 'G', 'F'],
    'B♭': ['F', 'E♭', 'D♭', 'C', 'B♭', 'A♭', 'G♭'],
    B: ['F♯', 'E', 'D', 'C♯', 'B', 'A', 'G']
};

const enharmonicKeys: string[] = ['D♯', 'A♯', 'B♯', 'E♯', 'F♭', 'C♭', 'F𝄪', 'B♭♭', 'E♭♭', 'A♭♭', 'D♭♭'];
const harmonicEquivalents: string[] = ['E♭', 'B♭', 'C', 'F', 'E', 'B', 'G', "A", "D", "G", "C"];
export function generateNegativesFromCircleOfFifths(circleOfFifthsArray: string[]): string[][] {
    const major = [circleOfFifthsArray[0], circleOfFifthsArray[2], circleOfFifthsArray[4], circleOfFifthsArray[11], circleOfFifthsArray[1], circleOfFifthsArray[3], circleOfFifthsArray[5]];
    const pairs = [circleOfFifthsArray[1], circleOfFifthsArray[11], circleOfFifthsArray[9], circleOfFifthsArray[3], circleOfFifthsArray[0], circleOfFifthsArray[10], circleOfFifthsArray[8]]
    return [major, pairs];
}

export function filterSelectedKeyForEnharmonics(selectedKey: string): string {
    const index = enharmonicKeys.indexOf(selectedKey);
    console.log("INDEX", index, selectedKey)
    if (index >= 0) {
        selectedKey = harmonicEquivalents[index];
        console.log("SELECTGED KEY", selectedKey)
    }
    return selectedKey;
}



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