// see docs: https://eslint.org/docs/user-guide/configuring

/**
 * Base TypeScript configuration
 */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
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
