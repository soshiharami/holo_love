module.exports = {
  env: {
    browser: true,
    es2022: true,
    es6: true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {},
};
