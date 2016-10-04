import npm from "rollup-plugin-node-resolve";

export default {
  entry: "index-multi.js",
  format: "umd",
  moduleName: "d3",
  plugins: [npm({jsnext: true})],
  dest: "d3-multi.js"
};
