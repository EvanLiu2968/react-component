## Loading 加载动画

提供多种样式的加载动画。

### 基本用法

加载动画基于CSS3和SVG、Base64，无其他网络资源依赖。

::: demo Loading 组件需要设置`type`和`show`属性，选择样式类型和是否显示。
```js
render() {
  return (
    <div style={{minHeight: '100px'}}>
      <Loading 
        type={'circle'}
        fullscreen={false}
        show={true}/>
    </div>
  )
}
```
:::



### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| **title** | 标题，**必选参数** | string | — | — |
| type | 样式类型 | string | — | circle |
| show | 是否显示 | boolean | — | true |
| fullscreen | 是否全屏 | boolean | — | false |
| text | 显示文字 | string | — | 正在加载中 |