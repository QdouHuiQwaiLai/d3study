## 安装

```javascript
yarn add react react-dom
yarn add @types/react @types/react-dom --dev
yarn add webpack webpack-cli webpack-dev-server --dev
yarn add typescript awesome-typescript-loader --dev
yarn add html-webpack-plugin --dev
```

webpack.config.js

```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './src/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        // library: 'IReact',
        // libraryTarget: 'umd'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      })
    ],
}
```

