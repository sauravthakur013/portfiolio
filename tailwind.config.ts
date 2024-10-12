import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#1E201E",
        lightBackgroundColor: "#3C3D37",
        darkgreenColor: "#697565",
        offWhiteColor: "#ECDFCC",

        backgroundColor2: "#F2EED7"
      },
    },
  },
  plugins: [],
};
export default config;
