module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        boxShadow: {
        md: "0 3px 9px 0 rgba(0, 0, 0, 0.09)",
        cs: 'inset 0 0 100px rgb(0 0 0 / 50%)'
      },
      backgroundColor: {
       cd: 'rgba(48, 53, 70, 0.5)'
     },
    },
  },
  plugins: [],
}