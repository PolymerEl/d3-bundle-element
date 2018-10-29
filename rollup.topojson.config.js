import ascii from "rollup-plugin-ascii";
import node from "rollup-plugin-node-resolve";
import {terser} from "rollup-plugin-terser";
import * as meta from "./package.json";

const config =  {
  input: "index-topojson.js",
  plugins: [node(), ascii()],
  output: {
	  format: "umd",
  	name: "topojson",
  	indent: false,
  	extend: true,
  	file: "build/topojson.js",
    banner: `// ${meta.homepage} v${meta.version} Copyright ${(new Date).getFullYear()} ${meta.author.name}`,
  }
};

 export default [
  config,
  {
    ...config,
    output: {
      ...config.output,
      file: `build/topojson.min.js`
    },
    plugins: [
      ...config.plugins,
      terser({
        output: {
          preamble: config.output.banner
        }
      })
    ]
  }
	];