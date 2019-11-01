import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy-glob';

const destination = "public"

require("rimraf").sync(destination);
// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: './src/main.js',
	output: {
		dir: destination,
		format: 'esm', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
    terser(),
    copy([
      { files: 'src/**/*.{html,css,png,jpg,json}', dest: destination}
    ])
	]
};