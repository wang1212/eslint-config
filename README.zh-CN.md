# ESLint Config

<!-- ![MINZIPPED SIZE](https://badgen.net/bundlephobia/minzip/@wang1212/eslint-config) -->

![LICENSE](https://badgen.net/github/license/wang1212/eslint-config)
[![NPM VERSION](https://badgen.net/npm/v/@wang1212/eslint-config)](https://www.npmjs.com/package/@wang1212/eslint-config)
![DOWNLOAD](https://badgen.net/npm/dt/@wang1212/eslint-config)
![LAST COMMIT](https://badgen.net/github/last-commit/wang1212/eslint-config)
![GITHUB PACKAGE CI](https://img.shields.io/github/workflow/status/wang1212/eslint-config/Node.js%20Package?label=ci/package%20publish)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/a9b9c06027ba47788617123cf84d3912)](https://www.codacy.com/gh/wang1212/eslint-config/dashboard?utm_source=github.com&utm_medium=referral&utm_content=wang1212/eslint-config&utm_campaign=Badge_Grade)

[English](./README.md) | 简体中文

这个包提供了社区推荐的 [ESLint](https://eslint.org/) 规则配置，作为一个可扩展的共享配置。（与 [Prettier](https://prettier.io/) 配合使用）

## 用法

```bash
npm install --save-dev @wang1212/eslint-config
```

1. 安装 `peerDependencies`：

   ```bash
   npm install --save-dev eslint
   npm install --save-dev --save-exact prettier
   ```

2. 在项目根目录创建一个 **.prettierrc.yml** 文件，配置以下内容:

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

   _这只是推荐配置，可以根据你的喜好进行调整。_

3. 然后你需要添加 `@wang1212/eslint-config` 到你的 **.eslintrc.json** 配置文件：

   ```diff
   {
   + "extends": ["@wang1212/eslint-config"]
   }
   ```

   _ESLint 的规则配置是可以根据你自己的要求进行配置覆盖的，请参考[官方文档](https://eslint.org/docs/user-guide/configuring/rules)。_

## 配置细节

### `@wang1212/eslint-config`

该配置适用于基本的 JavaScript，基于 [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)、[SonarJS](https://github.com/SonarSource/eslint-plugin-sonarjs)、[JSDoc](https://jsdoc.app/)。(See [Source](./src/javascript.cjs))

### `@wang1212/eslint-config/typescript`

该配置适用于基本的 [TypeScript](https://www.typescriptlang.org/)，基于 [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)、[SonarJS](https://github.com/SonarSource/eslint-plugin-sonarjs)、[TSDoc](https://tsdoc.org/)。(See [Source](./src/typescript.cjs))

使用这个配置还需要一些额外的工作。

1. 安装额外的 `peerDependencies`:

   ```bash
   npm install --save-dev @typescript-eslint/parser
   ```

2. 然后你需要添加 `@wang1212/eslint-config/typescript` 到你的 **.eslintrc.json** 配置文件：

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

### `@wang1212/eslint-config/node`

该配置适用于 JavaScript 编写的 [Node.js](https://nodejs.dev/) 程序，基于 [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)、[SonarJS](https://github.com/SonarSource/eslint-plugin-sonarjs)、[JSDoc](https://jsdoc.app/)。(See [Source](./src/node.cjs))

使用这个配置还需要一些额外的工作。

- 你需要添加 `@wang1212/eslint-config/node` 到你的 **.eslintrc.json** 配置文件：

  ```diff
  {
  - "extends": ["@wang1212/eslint-config"],
  + "extends": ["@wang1212/eslint-config/node"],
  }
  ```

## 开发准则

### Git 提交信息格式

采用[社区提交格式最佳实践](https://www.conventionalcommits.org/)：

```bash
# 以前
git commit

# 现在
npm run commit
```

_这种约束依赖于社区提供的工具 [commitizen](http://commitizen.github.io/cz-cli/) 和 [commitlint](https://commitlint.js.org/)。_

### npm 发布

该模块的版本管理采用社区推荐的规范[语义化版本控制](https://semver.org/)。跟随版本变动会维护一个**变更日志(CHANGELOG.md)**（[了解为什么这么做](https://keepachangelog.com/)）。

```bash
# 在发布到 npm 存储库之前更新版本并生成更改日志
npm run release # npm run release -- --first-release
# 或者，进行预览
npm run release -- --dry-run

# 然后发布
npm publish # npm publish --access public
```

_这些工作是在社区提供的 [standard-version](https://github.com/conventional-changelog/standard-version) 工具的帮助下完成的。_

## 许可

[MIT](./LICENSE).
