
/**
 * Hexadecimal to RGB
 *
 * @param  {str}     hexadecimal value
 * @return {obj}     red, green and blue
 */
export function hexToRGB(hexadecimal) {
	let hex = hexadecimal.replace('#', '');

	if (hex.length === 3) {
		const h1 = hex.charAt(0);
		const h2 = hex.charAt(1);
		const h3 = hex.charAt(2);

		hex = h1 + h1 + h2 + h2 + h3 + h3;
	}

	const bw = parseInt(hex, 16);

	return {
		r: (bw >> 16) & 255, // eslint-disable-line no-bitwise
		g: (bw >> 8) & 255, // eslint-disable-line no-bitwise
		b: bw & 255, // eslint-disable-line no-bitwise
	};
}


/**
 * Mix colors
 *
 * @param  {obj} color1
 * @param  {obj} color2
 * @param  {int} percentage
 * @return {obj} color object
 */
export function mix(color1, color2, percentage = 50) {
	const weight = (percentage / 100.0);
	const w = (weight * 2 - 1);
	const a = 0;

	const w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
	const w2 = (1 - w1);

	const r = Math.round(color1.r * w1 + color2.r * w2);
	const g = Math.round(color1.g * w1 + color2.g * w2);
	const b = Math.round(color1.b * w1 + color2.b * w2);

	return { r, g, b };
}


/**
 * Push color
 *
 * @param {arr} array
 * @param {str} color1
 * @param {str} color2
 * @param {int} percentage
 */
export function pushColor(array, color1, color2, percentage) {
	array.push(
		mix(
			{
				r: hexToRGB(color1).r,
				g: hexToRGB(color1).g,
				b: hexToRGB(color1).b,
			},
			color2,
			percentage,
		),
	);
}
