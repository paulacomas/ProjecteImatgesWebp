/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/**/*.html", // Scan HTML files in public folder
    "./src/**/*.{html,js}", // Scan HTML and JS files in src
  ],
  theme: {
    extend: {
      colors: {
        secondary1: "#1f2937",
        primary: "#111827",
        secondary2: "#2563eb",
        tertiary: "#374151",
        hover: "#9ca3af",
        hover2: "#1A80E5",
      },
      fontFamily: {
        sans: ["Monrope", "sans-serif"], // Set 'Monrope' as the primary sans font
      },
    },
  },
  plugins: [],
};
