## Echarts 图表

依赖于echarts，不过是以动态创建script标签的形式引进，默认路径是线上的cdn地址，当然，你也可以设置为本地的路径。

- [echarts图表](http://echarts.baidu.com/option.html)

### 基本用法

::: demo `option`与echarts官方的`option`属性相同。
```js
render() {
  const echartsData={
    xAxisData:[2, 4, 16, 7, 50, 7, 1, 6, 12],
    seriesData: ["渔业", "林业", "农业", "纺织", "工业", "互联网", "金融", "家居", "食品"]
  }
  const echartsOption={
    option: {
      title: {
        text: '行业数据'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data:['从业人员数量']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: echartsData.xAxisData
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name:'人员数量',
          type:'line',
          stack: '数量',
          data:echartsData.seriesData
        }
      ]
    },
    onChartReady: function(){},
    onEvents: {},
  }
  return (
    <div>
      <Echarts {...echartsOption} />
    </div>
  )
}
```
:::


### Attributes

前三个参数均为`echartsInstance`的`setOption`参数，文档：[http://echarts.baidu.com/api.html#echartsInstance.setOption](http://echarts.baidu.com/api.html#echartsInstance.setOption).

 - **`option`** (必填, object)

主配置项： [http://echarts.baidu.com/option.html#title](http://echarts.baidu.com/option.html#title).

 - **`notMerge`** (可选, type: bool, default: false)

 可选，是否不跟之前设置的option进行合并，默认为false，即合并。

 - **`lazyUpdate`** (可选, type: bool, default: false)

 可选，在设置完option后是否不立即更新图表，默认为false，即立即更新。

 - **`style`** (可选, object)

the `style` of echarts div. `object`, default is {height: '300px',width: '100%'}.

 - **`className`** (可选, string)

the `class` of echarts div. you can setting the css style of charts by class name.

 - **`theme`** (可选, string)

组件已内置主题：'default' || 'primary'(现在还没有加) , 默认不启用主题

 - **`onChartReady`** (可选, function)

when the chart is ready, will callback the function with the `echarts object` as it's paramter.

 - **`loadingOption`** (可选, object)

the echarts loading option config: [http://echarts.baidu.com/api.html#echartsInstance.showLoading](http://echarts.baidu.com/api.html#echartsInstance.showLoading).

 - **`showLoading`** (可选, type: bool, default: false)

`bool`, when the chart is rendering, show the loading mask.

 - **`onEvents`** (可选, array(string=>function) )

binding the echarts event, will callback with the `echarts event object`, and `the echart object` as it's paramters. e.g:

```js
let onEvents = {
  'click': this.onChartClick,
  'legendselectchanged': this.onChartLegendselectchanged
}
...
<ReactEcharts
  option={option}
  onEvents={onEvents} />
```
更多事件请看: [http://echarts.baidu.com/api.html#events](http://echarts.baidu.com/api.html#events)

### Others
```javascript
var Component = <Echarts {...echartsOption} />

Component.echarts:echarts对象(等同于window.echarts,通过inject注入)
Component.echartsElement:echarts初始化后的实例生成的Dom
// Component.echartsInstance:echarts初始化后的实例
Component.getEchartsInstance():echarts初始化后的实例
```

