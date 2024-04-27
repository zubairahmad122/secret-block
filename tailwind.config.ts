import type { Config } from "tailwindcss";



module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', "sans-serif"],
      },
      gridTemplateColumns: {
        '3f': 'repeat(3, 374px)',
        '3fs': 'repeat(3, 1fr)',
        '2f': 'repeat(2,1fr)',
        '1f': 'repeat(1,335px)',
        '1fs': 'repeat(1,1fr)',
      },
      screens: {
        'xsm': '462px',

        'mdd': '862px',
        'xll': '1362px',
        'xlg': '1162px',
        'xlb': '1280px',
        'ssm': '310px',
      },
    },
  },
  plugins: [require("daisyui")],
}

