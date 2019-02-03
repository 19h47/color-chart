import { hexToRGB, pushColor } from '@/utils';

/**
 * Tint
 *
 * Slightly lighten a color
 *
 * @param {str} color          hexadecimal value of the color to tint
 * @param {int} percentage     optional
 * @author Jérémy Levron <jeremylevron@19h47.fr> (http://19h47.fr)
 */
export default class ColorChart {
	constructor(color) {
		this.colors = [];

		this.color = hexToRGB(color);
	}


	/**
	 * Generate
	 *
	 * @param  {int}     percentage
	 * @param  {obj}     color
	 * @return {obj}     this
	 */
	generate(color, percentage) {
		pushColor(this.colors, color, this.color, percentage);

		return this;
	}

	/**
	 * Generates
	 *
	 * @param  {obj} color
	 * @param  {int} percentage
	 * @return {obj} this
	 */
	generates(color, percentage) {
		this.reset();

		for (let i = 10; i <= percentage; i += 10) {
			pushColor(this.colors, color, this.color, i);
		}

		return this;
	}

	/**
	 * Reset
	 *
	 * @return {obj} this
	 */
	reset() {
		this.colors = [];

		return this;
	}

	render() {
		for (let i = 0; i < this.colors.length; i += 1) {
			const div = document.createElement('div');

			div.style.cssText = `
				width: 50px;
				height: 50px;
				display: inline-block;
				background-color: rgb(${this.colors[i].r}, ${this.colors[i].g}, ${this.colors[i].b});
			`;

			document.body.appendChild(div);
		}
		document.body.appendChild(document.createElement('br'));
	}
}
