import pkg from "./package.json";
import postcss from "rollup-plugin-postcss-modules";
import typescript from "@rollup/plugin-typescript";

export default [
  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: "src/main.ts",
    external: ["react", "react-dom"],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    plugins: [
      postcss({ modules: true, extract: true }),
      // needed to place styles.d.ts in src folder so it would be registered by typescript
      typescript(),
    ],
  },
];
