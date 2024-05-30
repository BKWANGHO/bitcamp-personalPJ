import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'paperBg': "url('https://previews.123rf.com/images/sripfoto/sripfoto1509/sripfoto150900038/44868038-%EC%98%A4%EB%9E%98-%EB%90%9C-%EC%A2%85%EC%9D%B4-%EC%A7%88%EA%B0%90-%EB%B0%B0%EA%B2%BD.jpg')",
        'woodBg': "url('https://previews.123rf.com/images/vladimirs/vladimirs1612/vladimirs161200023/69147417-%EB%82%98%EB%AC%B4-%EC%A7%88%EA%B0%90-%EB%82%98%EB%AC%B4-%EB%B0%B0%EA%B2%BD-%EC%98%A4%EB%9E%98-%EB%90%9C-%EA%B0%88%EC%83%89-%EB%AA%A9%EC%9E%AC-%EB%B2%BD-%EB%98%90%EB%8A%94-%EA%B3%A1%EB%AC%BC-%EC%A7%88%EA%B0%90-%EB%90%9C-%EB%82%98%EB%AC%B4-%ED%85%8C%EC%9D%B4%EB%B8%94.jpg')",
        'test' : "url('https://img.freepik.com/premium-vector/space-stars-background-illustration-night-sky_160081-239.jpg')",
        'chart' : "url('https://img.freepik.com/premium-vector/stock-market-investment-trading-graph-in-graphic-concept-suitable-for-financial-investment_258787-15.jpg')",
      },
      fontFamily:{
        'font1':['font1'],
        'font2':['font2']
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        test: 'test 3s ease-in-out infinite',
        test1: 'test1 3s ease-in-out infinite',
        test2: 'test2 3s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        test: {
          '0%, 100%': { transform: 'translateX(-100%)'},
        },
        test1:{
          '0%': { transform: 'bg-white' },
          '50%': {transform: 'bg-pink-300' },
          '100%': { transform: 'bg-black' },
        },
        test2:{
          '0%': { transform: 'bg-chart' },
          '50%': {transform: 'bg-paperBg' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
