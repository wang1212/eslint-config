// see docs: https://eslint.org/docs/user-guide/configuring

module.exports = {
  // extends: ['./src/javascript.cjs'],
  extends: ['./src/node.cjs'],
  ignorePatterns: ['node_modules', '.husky', '.github'],
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: false,
  },
  rules: {},
  globals: {},
};
