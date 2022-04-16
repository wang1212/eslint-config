# create lib starter

这是用于构建 **JavaScript/Node.js** 库的启动开发配置模板。

该构建工具基于 [rollup](http://rollupjs.org/) 和 [babel](https://babeljs.io/) 等工具。

[English](./README.md) | 简体中文

## 打包

运行 `npm run build`, 最终将生成以下捆绑包。

    build/
    ├── bundle.js
    ├── bundle.min.js
    ├── bundle.esm.js
    ├── bundle.esm.min.js
    ├── bundle.cjs.js
    ├── bundle.cjs.min.js
    ├── bundle.umd.js
    └── bundle.umd.min.js

还将生成相应的 **sourcemap** 文件。

## 用法

有两种使用此模板的方法：

- 1. 打开 [GitHub Repository Website](https://github.com/wang1212/create-lib-starter), 然后点击 **Use this template** 按钮。

- 2. 另一种方式, `clone` 到本地

```bash
git clone https://github.com/wang1212/create-lib-starter.git
npm install
```

修改 `package.json` 信息, 例如 `name`, `description` 等。

然后, 将仓库远程地址修改为你自己的:

```bash
git remote set-url origin 'your own address'
```

## 其它

由于构建工具的不同，提供了多种选择：

- [babel](https://github.com/wang1212/create-lib-starter/) - 基于 babel.js 构建。 (分支)
- [typescript](https://github.com/wang1212/create-lib-starter/tree/typescript) - 基于 typescript 构建。 (分支)

## 相关的

如果你想开发一个 Node.js 命令行工具，可以看看：

- [create-cli-app](https://github.com/wang1212/create-lib-starter/tree/cli) - 构建 cli 应用。 (分支)

或，如果你想开发一个 Web 应用，也许你可以看看：

> [create-web-app](https://github.com/wang1212/create-web-app)

或，其它类似的东西：

> [awesome-template](https://github.com/wang1212/awesome-template)

## 许可

[MIT](./LICENSE).
