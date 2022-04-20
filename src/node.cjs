// see docs: https://eslint.org/docs/user-guide/configuring

/**
 * Node.js configuration
 */
module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:n/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended',
  ],
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  rules: {
    'import/extensions': ['error', 'ignorePackages'],
  },
};
