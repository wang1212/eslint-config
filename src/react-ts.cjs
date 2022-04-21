// see docs: https://eslint.org/docs/user-guide/configuring

/**
 * Configuration for react apps written in TypeScript.
 */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
    'plugin:compat/recommended',
  ],
  env: {
    node: true,
    browser: true,
  },
  plugins: ['eslint-plugin-tsdoc'],
  rules: {
    'tsdoc/syntax': 'warn',
  },
};
