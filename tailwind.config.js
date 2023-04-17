/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-1": "#45269C",
      },
      boxShadow: {
        sm: "0px 0px 100px rgba(0, 0, 0, 0.02)",
      },
    },
  },
  plugins: [],
};
