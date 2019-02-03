import ColorChart from '@/ColorChart';

const COLOR = '#000000';

/**
 * Shade
 *
 * Slightly darken a color
 *
 * @param {str} color         heaxadecimal value of the color to shade
 */
export default class Shade extends ColorChart {
	generates(percentage) {
		return super.generates(COLOR, percentage);
	}

	generate(percentage) {
		return super.generate(COLOR, percentage);
	}
}
