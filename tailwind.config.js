module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
    colors: {
      offwhite: '#f1f5fe',
      white: '#ffffff',
      lightBlue: '#f9faff',
      lightGrey: '#aaaebb',
      black: '#000000',
      lightBlack: '#868686',
      lightOrange: '#faf0ea',
      darkOrange: '#d9947a',
      dividerColor: '#e7e7e7cc',
      buttonColor: '#293355',
      lightGreen: '#5AE4D4',
    },
    fontFamily: {
      manrope: ['Manrope'],
    },
  },
  plugins: [],
};
