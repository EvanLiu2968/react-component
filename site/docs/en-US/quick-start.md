## Quick start

### Installation
Installing with npm is recommended and it works seamlessly with `webpack`.

```shell
npm i @evanliu2968/react-component --save
```

### Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Qrcode } from '@evanliu2968/react-component';
// import Qrcode from '@evanliu2968/react-component/qrcode'; // or import single component

ReactDOM.render(<Qrcode text={'https://www.evanliu2968.com.cn'}/>, document.getElementById('app'));

```
