<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment'; // Import the browser variable
	// Import the browser variable
	import type { WindowSize } from './types';

	// Initialize with default values
	let windowSize: WindowSize = {
		width: 0,
		height: 0
	};

	function handleResize(): void {
		windowSize = {
			width: window.innerWidth,
			height: window.innerHeight
		};
	}

	onMount(() => {
		// Check if running in the browser
		if (browser) {
			windowSize = {
				// Set initial window size
				width: window.innerWidth,
				height: window.innerHeight
			};
			window.addEventListener('resize', handleResize);
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('resize', handleResize);
		}
	});
</script>

<div>
	The window size is {windowSize.width} x {windowSize.height}.
</div>
