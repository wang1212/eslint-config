# ESLint Config

<!-- ![MINZIPPED SIZE](https://badgen.net/bundlephobia/minzip/@wang1212/eslint-config) -->

![LICENSE](https://badgen.net/github/license/wang1212/eslint-config)
[![NPM VERSION](https://badgen.net/npm/v/@wang1212/eslint-config)](https://www.npmjs.com/package/@wang1212/eslint-config)
![DOWNLOAD](https://badgen.net/npm/dt/@wang1212/eslint-config)
![LAST COMMIT](https://badgen.net/github/last-commit/wang1212/eslint-config)
![GITHUB PACKAGE CI](https://img.shields.io/github/workflow/status/wang1212/eslint-config/Node.js%20Package?label=ci/package%20publish)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/a9b9c06027ba47788617123cf84d3912)](https://www.codacy.com/gh/wang1212/eslint-config/dashboard?utm_source=github.com&utm_medium=referral&utm_content=wang1212/eslint-config&utm_campaign=Badge_Grade)

English | [简体中文](./README.zh-CN.md)

🔧 This package provides community-recommended [ESLint](https://eslint.org/) rules configuration as an extensible shared configuration. (Use with [Prettier](https://prettier.io/))

_Support [ESLint V8](https://eslint.org/blog/2021/10/eslint-v8.0.0-released), Node.js requires version >=12.22.0._

## Usage

```bash
npm install --save-dev @wang1212/eslint-config
```

1. Install `peerDependencies`:

   ```bash
   npm install --save-dev eslint
   npm install --save-dev --save-exact prettier
   ```

2. Create a **.prettierrc.yml** file in the project root directory and configure the following:

   ```yaml
   # see docs: https://prettier.io/docs/en/configuration.html

   # prettier config
   printWidth: 80
   tabWidth: 2
   useTabs: false
   singleQuote: true
   semi: true
   endOfLine: 'auto'
   ```

   _This is just a recommended configuration and can be adjusted to your liking._

3. Then you need to add `@wang1212/eslint-config` in your **.eslintrc.json**:

   ```diff
   {
   + "extends": ["@wang1212/eslint-config"]
   }
   ```

   _The rule configuration of ESLint can be configured and covered according to your own requirements, please refer to the [official documentation](https://eslint.org/docs/user-guide/configuring/rules)._

## Configuration Details

### `@wang1212/eslint-config`

This configuration is for basic JavaScript, based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), [SonarJS](https://github.com/SonarSource/eslint-plugin-sonarjs), [JSDoc](https://jsdoc.app/), and [check API compatibility](https://github.com/amilajack/eslint-plugin-compat) with [Browserslist](https://github.com/browserslist/browserslist). (See [Source](./src/javascript.cjs))

### `@wang1212/eslint-config/typescript`

This configuration is for basic [TypeScript](https://www.typescriptlang.org/), based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), [SonarJS](https://github.com/SonarSource/eslint-plugin-sonarjs), [TSDoc](https://tsdoc.org/), and [check API compatibility](https://github.com/amilajack/eslint-plugin-compat) with [Browserslist](https://github.com/browserslist/browserslist). (See [Source](./src/typescript.cjs))

_This config also has an alias `@wang1212/eslint-config/ts`._

Using this configuration also requires some extra work.

1. Install additional `peerDependencies`:

   ```bash
   npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
   ```

   _**Note:** according to the official maintenance policy, the above dependencies should always be installed with the same version number._

2. Then you need to add `@wang1212/eslint-config/typescript` in your **.eslintrc.json**:

   ```diff
   {
   - "extends": ["@wang1212/eslint-config"],
   + "extends": ["@wang1212/eslint-config/typescript"],
   + "parser": "@typescript-eslint/parser",
   + "parserOptions": {
   +   "project": './tsconfig.json'
   + },
   }
   ```

### `@wang1212/eslint-config/react`

This configuration is for [react.js](https://reactjs.org/) applications written in JavaScript, based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), [Hooks](https://reactjs.org/docs/hooks-intro.html), [SonarJS](https://github.com/SonarSource/eslint-plugin-sonarjs), [JSDoc](https://jsdoc.app/), and [check API compatibility](https://github.com/amilajack/eslint-plugin-compat) with [Browserslist](https://github.com/browserslist/browserslist). (See [Source](./src/react.cjs))

Using this configuration also requires some extra work.

- You need to add `@wang1212/eslint-config/react` in your **.eslintrc.json**:

  ```diff
  {
  - "extends": ["@wang1212/eslint-config"],
  + "extends": ["@wang1212/eslint-config/react"],
  }
  ```

### `@wang1212/eslint-config/react-typescript`

This configuration is for [react.js](https://reactjs.org/) applications written in [TypeScript](https://www.typescriptlang.org/), based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), [Hooks](https://reactjs.org/docs/hooks-intro.html), [SonarJS](https://github.com/SonarSource/eslint-plugin-sonarjs), [TSDoc](https://tsdoc.org/), and [check API compatibility](https://github.com/amilajack/eslint-plugin-compat) with [Browserslist](https://github.com/browserslist/browserslist). (See [Source](./src/react-ts.cjs))

_This config also has an alias `@wang1212/eslint-config/react-ts`._

Using this configuration also requires some extra work.

1. Install additional `peerDependencies`:

   ```bash
   npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
   ```

   _**Note:** according to the official maintenance policy, the above dependencies should always be installed with the same version number._

2. Then you need to add `@wang1212/eslint-config/react-typescript` in your **.eslintrc.json**:

   ```diff
   {
   - "extends": ["@wang1212/eslint-config"],
   + "extends": ["@wang1212/eslint-config/react-typescript"],
   + "parser": "@typescript-eslint/parser",
   + "parserOptions": {
   +   "project": './tsconfig.json'
   + },
   }
   ```

### `@wang1212/eslint-config/node`

This configuration is for [Node.js](https://nodejs.dev/) programs written in JavaScript, based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), [SonarJS](https://github.com/SonarSource/eslint-plugin-sonarjs), [JSDoc](https://jsdoc.app/). (See [Source](./src/node.cjs))

Using this configuration also requires some extra work.

- You need to add `@wang1212/eslint-config/node` in your **.eslintrc.json**:

  ```diff
  {
  - "extends": ["@wang1212/eslint-config"],
  + "extends": ["@wang1212/eslint-config/node"],
  }
  ```

## Development Guidelines

### Git Commit Message Format

Adopt [community commit format best practices](https://www.conventionalcommits.org/):

```bash
# Before
git commit

# Now
npm run commit
```

_This constraint relies on tools [commitizen](http://commitizen.github.io/cz-cli/) and [commitlint](https://commitlint.js.org/) provided by the community._

### npm publish

The version management of this module adopts the specifications recommended by the community [Semantic Versioning](https://semver.org/). Follow version changes and maintain a **CHANGELOG.md**([Learn why](https://keepachangelog.com/)).

```bash
# Update version and generate changelog before publishing to npm repository
npm run release
# Or, preview
npm run release -- --dry-run

# Then publish to npm, if yes is not selected when auto-publishing to npm
npm publish # npm publish --access public
```

_These jobs are done with the help of [release-it](https://github.com/release-it/release-it) tool provided by the community._

## License

[MIT](./LICENSE).
