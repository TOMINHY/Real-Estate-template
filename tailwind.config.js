/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        'dm': ['"Dm Sans"'],
        'roboto':['"Roboto"'],
        'inter':['"Inter"']
      },
      colors: {
        orangeff: "#FF9900",
        orangef8: "#F85A47",
        gray31: "#31353B",
        gray33: "#333333",
        gray54: "#545A58",
        grayda: "#DADADA"
      },
      gridTemplateColumns: {
        work: "1fr auto 1fr auto 1fr"
      }
    },
  },
  plugins: [],
}

