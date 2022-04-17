// see docs: https://eslint.org/docs/user-guide/configuring

module.exports = {
  ignorePatterns: ['node_modules'],
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: false,
  },
  extends: ['./index.js'],
  rules: {},
  globals: {},
};
