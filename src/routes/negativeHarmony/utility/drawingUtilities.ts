export type Position = {
    x: number;
    y: number;
};

interface Circle {
    centerX: number;
    centerY: number;
    radius: number;
}

// let currentRotation = 0;

export function calculateRotationForKey(key: string, notes: string[]): number {
    const index = notes.indexOf(key);
    console.log("INDEXINROT", index)
    console.log("rotation", -index * 30)
    return -index * 30
}
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

export function rotateCircle(key: string, notes: string[], currentRotation: number): number {
    const rotationIncrement = calculateRotationForKey(key, notes);
    currentRotation += rotationIncrement;

    // Normalize the rotation
    currentRotation = currentRotation % 360;

    // Apply the rotation to your circle element (for example, with a CSS transform)
    applyRotationToCircle(currentRotation);
    return currentRotation;
}

export function applyRotationToCircle(rotationDegree: number): void {
    const circleElement = document.getElementById('wheel');
    if (circleElement) {
        circleElement.style.transform = `rotate(${rotationDegree}deg)`;
    }
}

// Your calculateRotationForKey function here


export function getAxisLineTransform(notes: string[], selectedKey: string): string {
    const index = notes.indexOf(selectedKey);
    const fifthIndex = (index + 1) % notes.length; // Index of the fifth note
    const angle = (index + fifthIndex) * 15 - 90; // Average angle of the selected key and its fifth
    return `rotate(${angle}deg)`;
}


const buttonRadius = 30; // Since your buttons are effectively circles with a 20px radius

export function getNoteElementsForDrawingPairs(): void {
    // ... (rest of your element selection code)
    var n0 = document.getElementById('note-0');
    var n1 = document.getElementById('note-1');
    var n11 = document.getElementById('note-11');
    var n2 = document.getElementById('note-2');
    var n10 = document.getElementById('note-10');
    var n3 = document.getElementById('note-3');
    var n9 = document.getElementById('note-9');
    var n4 = document.getElementById('note-4');
    var n8 = document.getElementById('note-8');
    var n5 = document.getElementById('note-5');
    var n7 = document.getElementById('note-7');
    var n6 = document.getElementById('note-6');
    var pairs = [n0, n1, n11, n2, n10, n3, n9, n4, n8, n5, n7, n6];
    for (let i = 0; i < pairs.length; i += 2) {
        const element1 = pairs[i] as HTMLElement;
        const element2 = pairs[i + 1] as HTMLElement;

        const position1 = getElementPosition(element1);
        const position2 = getElementPosition(element2);

        const circle1: Circle = {
            centerX: position1.x,
            centerY: position1.y,
            radius: buttonRadius
        };
        const circle2: Circle = {
            centerX: position2.x,
            centerY: position2.y,
            radius: buttonRadius
        };

        const linePoints = getAdjustedLinePoints(circle1, circle2);
        drawLine(linePoints.startX, linePoints.startY, linePoints.endX, linePoints.endY, i);
    }
}

export function drawLine(startX: number, startY: number, endX: number, endY: number, lineIndex: number): void {
    const line = document.getElementById('line-' + lineIndex) as SVGLineElement | null;

    if (line) {
        line.setAttribute('x1', startX.toString());
        line.setAttribute('y1', startY.toString());
        line.setAttribute('x2', endX.toString());
        line.setAttribute('y2', endY.toString());
    } else {
        console.error('Element with id "line-' + lineIndex + '" is not an SVGLineElement');
    }
}

export function getElementPosition(element: HTMLElement): Position {
    const rect = element.getBoundingClientRect();
    return {
        x: rect.left + window.scrollX + rect.width / 2,
        y: rect.top + window.scrollY + rect.height / 2
    };
}


function getAdjustedLinePoints(circle1: Circle, circle2: Circle): { startX: number, startY: number, endX: number, endY: number } {
    // Calculate the distance between the centers
    const dx = circle2.centerX - circle1.centerX;
    const dy = circle2.centerY - circle1.centerY;

    // Calculate the angle between the centers
    const angle = Math.atan2(dy, dx);

    // Adjust the start and end points of the line
    const adjustedStartX = circle1.centerX + circle1.radius * Math.cos(angle);
    const adjustedStartY = circle1.centerY + circle1.radius * Math.sin(angle);
    const adjustedEndX = circle2.centerX - circle2.radius * Math.cos(angle);
    const adjustedEndY = circle2.centerY - circle2.radius * Math.sin(angle);

    return {
        startX: adjustedStartX,
        startY: adjustedStartY,
        endX: adjustedEndX,
        endY: adjustedEndY
    };
}
