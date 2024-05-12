import type { WindowSize } from "../types";

export function handleResize(windowSize: WindowSize): void {
    windowSize = {
        width: window.innerWidth,
        height: window.innerHeight
    };
}
