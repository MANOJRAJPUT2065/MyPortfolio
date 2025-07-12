export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f0f0f",
        foreground: "#ffffff",
        muted: "#1e1e1e",
        'muted-foreground': '#a1a1aa',
        primary: "#38bdf8", // sky-400
        secondary: "#a78bfa", // purple-400
      },
      animation: {
        pulseFast: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
