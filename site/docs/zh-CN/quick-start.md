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

ReactDOM.render(<Qrcode url={'https://www.evanliu2968.com.cn'}/>, document.getElementById('app'));

```
