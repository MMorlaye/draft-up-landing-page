// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ⬅️ nécessaire pour React
  ],
  theme: {
    extend: {
      colors: {
        draftBlue: "#0A2F66",
        draftYellow: "#F2C94C",
        draftBlueDark: "#061E40",
      },
    },
  },
  plugins: [],
};
