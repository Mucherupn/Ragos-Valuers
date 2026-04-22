import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2e3092",
          orange: "#f8941d",
          navy: "#11152c",
          slate: "#4b5563",
          mist: "#f4f6fb"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(17, 21, 44, 0.08)",
        card: "0 8px 24px rgba(17, 21, 44, 0.06)"
      },
      maxWidth: {
        container: "1200px"
      }
    }
  },
  plugins: []
};

export default config;
