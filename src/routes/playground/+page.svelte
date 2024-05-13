<div class="guitar-neck">
	<div class="string"></div>
	<div class="string"></div>
	<div class="string"></div>
	<div class="string"></div>
	<div class="string"></div>
	<div class="string"></div>
	<div class="fret"></div>
	<div class="fret"></div>
	<div class="fret"></div>
	<div class="fret"></div>
	<div class="fret"></div>
	<div class="fret"></div>
	<div class="fret"></div>
	<div class="fret"></div>
	<div class="fret"></div>
	<div class="fret"></div>
	<div class="fret"></div>
	<div class="fret"></div>
	<div class="fret"></div>
	<div class="fret"></div>
</div>

<style>
	.guitar-neck {
		width: 40px; /* Adjust width as per your design */
		height: 600px; /* Adjust length as per your design */
		background-color: #654321; /* Dark wood color */
		position: relative;
		box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.4); /* for a more 3D look */
	}

	.string {
		position: absolute;
		width: 100%;
		height: 2px; /* thickness of the strings */
		background-color: #ccc; /* silver color for the strings */
		top: 50%;
		transform: translateY(-50%);
	}

	.string:not(:last-child) {
		box-shadow:
			0 10px 0 0 #ccc,
			0 20px 0 0 #ccc,
			0 30px 0 0 #ccc,
			0 40px 0 0 #ccc,
			0 50px 0 0 #ccc;
	}

	.fret {
		position: absolute;
		height: 100%;
		width: 2px; /* width of the frets */
		background-color: #ddd; /* light metal color */
		left: 0;
	}

	.fret:not(:first-child) {
		box-shadow:
			40px 0 0 0 #ddd,
			80px 0 0 0 #ddd,
			120px 0 0 0 #ddd,
			160px 0 0 0 #ddd,
			200px 0 0 0 #ddd,
			240px 0 0 0 #ddd,
			280px 0 0 0 #ddd,
			320px 0 0 0 #ddd,
			360px 0 0 0 #ddd;
	}
</style>
