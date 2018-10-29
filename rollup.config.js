// import npm from "rollup-plugin-node-resolve";

// export default {
//   entry: "index.js",
//   format: "umd",
//   moduleName: "d3",
//   plugins: [npm({jsnext: true})],
//   dest: "build/d3.js"
// };


import config from './getRollupConfig.js';
import * as meta from "./package.json";

const name = 'd3';
export default config(name, meta);