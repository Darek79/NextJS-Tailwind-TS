// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors

// interface Config{

// }
module.exports = {
  plugins: {
    tailwindcss: {},
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    },
  },
};

// (property) plugins: {
//   tailwindcss: {};
//   "postcss-flexbugs-fixes": {};
//   "postcss-preset-env": {
//       autoprefixer: {
//           flexbox: string;
//       };
//       stage: number;
//       features: {
//           "custom-properties": boolean;
//       };
//   };
// }
