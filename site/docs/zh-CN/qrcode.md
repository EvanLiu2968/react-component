## Qrcode 二维码

用于展示动态二维码。

### 基本用法

二维码以 **`canvas`** 标签展示。

::: demo Qrcode 组件一般只需设置`url`和`width`属性，默认前景色为纯黑，背景色为纯白。
```js
render() {
  return (
    <div>
      <Qrcode 
        text={'https://www.evanliu2968.com.cn'}/>
      <Qrcode 
        text={'https://github.com/EvanLiu2968/react-component/issues?utf8=%E2%9C%93&q=is%3Aopen'}
        width={300}
        margin={3}
        color={'#20A0FF'}/>
      <Qrcode 
        text={'https://www.evanliu2968.com.cn'}
        width={200}
        color={'#FF4949'}
        bgColor={'#FF494911'}
        margin={2}/>
    </div>
  )
}
```
:::

### 带有 Logo

在二维码中央展示Logo。

::: demo 通过设置`logo`属性来显示 二维码的logo，仅限图片类型。
```js
render() {
  return (
    <div>
      <Qrcode 
        text={'https://www.evanliu2968.com.cn'}
        logo={'https://www.evanliu2968.com.cn/public/images/horse.png'}
        errorCorrectionLevel={'H'}
        maskPattern={0}
        logoWidth={40}/>
    </div>
  )
}
```
:::



### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| text | 字符 | string | — | — |
| logo | url | string | — | — |
| logoWidth | logo宽度 | number | — | 40 |
| width | 宽度 | number | — | 200 |
| color | 前景色(4个参数，rgb+明度) | string | — | #000000ff |
| bgColor | 背景色(同上) | string | — | #ffffffff |
| margin | 边距(二维码条纹宽度的倍数) | number | 0, 1, 2, 3, 4 | 1 |
| errorCorrectionLevel | Error Correction Level | string | "L", "M", "Q", "H" | Q |
| maskPattern | Calculated Mask pattern | number | 0 - 7 | 4 |

### Others
```js
const fs = require('fs')
const { generateQRCode } = require('@evanliu2968/qrcode')
generateQRCode('www.evanliu2968.com.cn').then((data)=>{
  data = data.replace(/^(data:image\/(png|jpg|jpeg);base64,)/,'')
  fs.writeFile('qrcode.png',new Buffer(data,'base64'),(err)=>{
    if(err){
      console.log('生成二维码错误')
    }else{
      console.log('生成二维码成功')
    }
  })
})
```