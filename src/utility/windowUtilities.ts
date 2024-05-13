import type { WindowSize } from "../routes/types"

export function handleResize(): any {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };


}
