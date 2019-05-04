## Lazyload 懒加载

按需懒加载图片或组件等


### 基本用法

::: demo `Lazyload.Img`可用于懒加载图片。
```js
render() {
  return (
    <div>
      <Lazyload.Img src='https://raw.githubusercontent.com/EvanLiu2968/clover/master/cdn/images/images/horse.png' />
      <Lazyload 
      style={{height:'200px'}} 
      offset={100}  
      onLazyLoad={()=>{console.log('懒加载完成')}}
      once>
        <div>懒加载组件</div>
      </Lazyload>
    </div>
  )
}
```
:::


### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| src | 图片url(用于`Lazyload.Img`) | string | — | — |
| animate | 图片加载动画(用于`Lazyload.Img`) | string | — | fadeIn |
| overflow | 组件位于overflow的容器内则设置true(即非body滚动事件) | Bool | false |
| placeholder | 懒加载未完成时的占位元素 | Any | ReactElement |
| onLazyLoad | 懒加载开始时的回调函数，参数为组件示例component | Function | — | — |
| style | 无placeholder时默认的lazyload-placeholder的样式 | Object | — | — |
| once | 是否仅加载一次，加载完无后续处理则使用该属性 | Bool | — | false |
| offset | 视口距组件的距离，`200`指组件视口下方200px时执行加载，数组 `[200, 200]`可设置top offset &bottom offset,用于处理组件在视口上方的情况 | Number/Array(Number) | — | 0 |
| scroll | 是否监听scroll事件 | Bool | true |
| resize | 是否监听resize事件 | Bool | false |
| unmountIfInvisible | 懒加载content unmount时是否显示 | Bool | false |
| debounce | debounce | Bool | — | — |
| throttle | throttle | Number | — | — |