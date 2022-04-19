// see docs: https://eslint.org/docs/user-guide/configuring

/**
 * Base JavaScript configuration
 */
module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended',
  ],
  env: {
    node: true,
    browser: true,
  },
  rules: {},
};
