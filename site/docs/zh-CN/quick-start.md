## 快速上手

### 安装
推荐使用 npm 的方式安装，它能更好地和`webpack`打包工具配合使用。

```shell
npm i @evanliu2968/react-component --save
```

### 使用

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Qrcode } from '@evanliu2968/react-component';

ReactDOM.render(<Qrcode text={'https://www.evanliu2968.com.cn'}/>, document.getElementById('app'));

```

### 按需引入
当然，你可以配合`babel-plugins`达到按需引入的目的，因为该组件库并非基础常用组件，建议以下的单组件引入方式即可。
```js
import React from 'react';
import ReactDOM from 'react-dom';
import Qrcode, { generateQRCode } from '@evanliu2968/react-component/qrcode';

ReactDOM.render(<Qrcode text={'https://www.evanliu2968.com.cn'}/>, document.getElementById('app'));
```
