// see docs: https://eslint.org/docs/user-guide/configuring

/**
 * Configuration for react apps written in JavaScript.
 */
module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
    'plugin:compat/recommended',
    'plugin:jsdoc/recommended',
  ],
  env: {
    node: true,
    browser: true,
  },
  plugins: [],
  rules: {},
};
