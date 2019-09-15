import typescript from "rollup-plugin-typescript2"
import { terser } from "rollup-plugin-terser"

const IS_PROD = process.env.NODE_ENV !== "production"
export default {
  input: "./src/index.ts",
  plugins: [
    typescript(),
    // resolve(),
    // commonjs(),
    IS_PROD ? terser() : null,
  ],
  output: {
    file: "dist/index.js",
    sourcemap: true,
    format: "cjs",
  },
  // external: ["external-module"],
}
