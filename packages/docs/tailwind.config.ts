import type { Config } from "tailwindcss";
import {
  fontSizes,
  fontWeights,
  fonts,
  colors as iuicolors,
  lineHeights,
  radii,
  space,
} from "@isaias-ui/tokens";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@isaias-ui/react/src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: iuicolors,
      fontSize: fontSizes,
      fontWeight: fontWeights,
      lineHeight: lineHeights,
      fontFamily: fonts,
      borderRadius: radii,
      space: space,
    },
  },
  plugins: [],
};
export default config;
