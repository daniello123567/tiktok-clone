import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes:{
        marque:{
          '0%': { transform: 'translateX(100%)', opacity: '1' },

          '90%': { opacity: '1' },

          '100%': { transform: 'translateX(-90%)', opacity: '0' }
        }
      },
    animation:{
      'marque':'marque 10s linear infinite'
    }
    },
  },
  plugins: [],
};
export default config;
