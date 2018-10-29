import node from 'rollup-plugin-node-resolve';
import ascii from "rollup-plugin-ascii";
import {terser} from "rollup-plugin-terser";

const config  = (name, meta) => {
  const config = {
    input: `index-${name}.js`,
    // external: Object.keys(meta.dependencies || {}).filter(key => /^d3-/.test(key)),
    output: {
      file: `build/d3-${name}.js`,
      name: "d3",
      format: "umd",
      indent: true,
      extend: true,
      banner: `// ${meta.homepage} v${meta.version} Copyright ${(new Date).getFullYear()} ${meta.author.name}`
      // globals: Object.assign({}, ...Object.keys(meta.dependencies || {}).filter(key => /^d3-/.test(key)).map(key => ({
        // [key]: "d3" })))
    },
    plugins: [
      node(),
      ascii()
    ]
  };

console.info('globals', config.output.globals)

  return [
  config,
  {
    ...config,
    output: {
      ...config.output,
      file: `build/d3-${name}.min.js`
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
};

export  default config;