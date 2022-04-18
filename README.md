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

🔧 Community-recommended best practices for [ESLint](https://eslint.org/) rule configuration.(Use with [Prettier](https://prettier.io/))

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
   endOfLine: 'lf'
   ```

   _This is just a recommended configuration and can be adjusted to your liking._

3. Then you need to add `@wang1212/eslint-config` in your **.eslintrc.json**:

   ```json
   {
     "extends": ["@wang1212/eslint-config"]
   }
   ```

   _The rule configuration of ESLint can be configured and covered according to your own requirements, please refer to the [official documentation](https://eslint.org/docs/user-guide/configuring/rules)._

## Configuration Details

- `@wang1212/eslint-config` (Base JavaScript configuration)

This configuration is for basic JavaScript, based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), [JSDoc](https://jsdoc.app/), [SonarJS](https://github.com/SonarSource/eslint-plugin-sonarjs).

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
npm run release # npm run release -- --first-release
# Or, preview
npm run release -- --dry-run

# Then
npm publish # npm publish --access public
```

_These jobs are done with the help of [standard-version](https://github.com/conventional-changelog/standard-version) tool provided by the community._

## License

[MIT](./LICENSE).
