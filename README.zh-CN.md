# ESLint Config

![LICENSE](https://badgen.net/github/license/wang1212/eslint-config)
[![NPM VERSION](https://badgen.net/npm/v/@wang1212/eslint-config)](https://www.npmjs.com/package/@wang1212/eslint-config)

<!-- ![MINZIPPED SIZE](https://badgen.net/bundlephobia/minzip/@wang1212/eslint-config) -->

![DOWNLOAD](https://badgen.net/npm/dt/@wang1212/eslint-config)
![LAST COMMIT](https://badgen.net/github/last-commit/wang1212/eslint-config)
![GITHUB PACKAGE CI](https://img.shields.io/github/workflow/status/wang1212/eslint-config/Node.js%20Package?label=ci/package%20publish)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[English](./README.md) | 简体中文

社区推荐的 [ESLint](https://eslint.org/) 规则配置最佳实践。（与 [Prettier](https://prettier.io/) 配合使用）

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
endOfLine: 'lf'
```

_这只是推荐配置，可以根据你的喜好进行调整。_

3. 然后你需要添加 `@wang1212/eslint-config` 到你的 **.eslintrc.json** 配置文件：

```json
{
  "extends": ["@wang1212/eslint-config"]
}
```

_ESLint 的规则配置是可以根据你自己的要求进行配置覆盖的，请参考[官方文档](https://eslint.org/docs/user-guide/configuring/rules)。_

## 配置细节

- `@wang1212/eslint-config` (基本 JavaScript 配置)

该配置适用于基本的 JavaScript，基于 [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)、[JSDoc](https://jsdoc.app/)、[SonarJS](https://github.com/SonarSource/eslint-plugin-sonarjs)。

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
