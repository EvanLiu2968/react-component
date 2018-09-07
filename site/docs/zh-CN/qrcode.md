## Qrcode 二维码

用于展示动态二维码。

### 基本用法

二维码以`img`标签展示，src属性为二维码的base64编码。

::: demo Qrcode 组件一般只需设置`url`和`width`属性，默认前景色为纯黑，背景色为纯白。
```js
render() {
  return (
    <div>
      <Qrcode 
        url={'https://www.evanliu2968.com.cn'}/>
      <Qrcode 
        url={'https://github.com/EvanLiu2968/react-component/blob/424a3d92dd3a7761ae8a0d1d1c371dc3dbb2f663/README.md'}
        width={300}
        color={'#20a0ff'}/>
      <Qrcode 
        url={'https://www.evanliu2968.com.cn'}
        width={200}
        color={'#000000'}
        bgColor={'#ffffff'}
        margin={1}
        scale={4} />
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
        url={'https://www.evanliu2968.com.cn'}
        logo={'https://www.evanliu2968.com.cn/public/images/horse.png'}/>
    </div>
  )
}
```
:::



### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| **title** | 标题，**必选参数** | string | — | — |
| url | 展示字符 | string | — | — |
| logo | logo链接 | string | — | — |
| width | 宽度 | number | — | 200 |
| color | 前景色 | string | — | #000000 |
| bgColor | 背景色 | string | — | #ffffff |
| margin | 边距 | number | — | 1 |