## Echarts 图表

依赖于Echarts，以动态创建script标签的形式引进，默认路径是线上的cdn地址，当然，你也可以设置为本地的路径。

- [Echarts图表](http://echarts.baidu.com/option.html)

### 基本用法

::: demo `option`与echarts官方的`option`属性相同。
```js
render() {
  const echartsOption={
    option: {
     backgroundColor: '#2c343c',

      title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc'
        }
      },

      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },

      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series : [
        {
          name:'访问来源',
          type:'pie',
          radius : '55%',
          center: ['50%', '50%'],
          data:[
            {value:335, name:'直接访问'},
            {value:310, name:'邮件营销'},
            {value:274, name:'联盟广告'},
            {value:235, name:'视频广告'},
            {value:400, name:'搜索引擎'}
          ].sort(function (a, b) { return a.value - b.value; }),
          roseType: 'radius',
          label: {
            normal: {
              textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                  color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            }
          },
          itemStyle: {
            normal: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]
    },
    onChartReady: function(){
      console.log('chart init ready.')
    },
    onEvents: {
      'click': function(){
        console.log('clicked')
      },
      'legendselectchanged': function(){
        console.log('legendselectchanged')
      }
    },
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
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| cdn | echarts资源url，可以设置为其他版本 | string | -- | `https://cdn.bootcss.com/echarts/3.8.5/echarts.min.js` |
| option | 主配置项 | Object | — | -- |
| notMerge |  可选，是否不跟之前设置的option进行合并，默认为false，即合并。 | boolean | — | false |
| lazyUpdate |  可选，在设置完option后是否不立即更新图表，默认为false，即立即更新。 | boolean | — | false |
| style | the `style` of echarts div. `object`. | string | — | `{height: '300px',width: '100%'}` |
| className | the `class` of echarts div. you can setting the css style of charts by class name. | string | — | -- |
| theme | 组件内置主题, 默认不启用主题 | string | — | 'default' |
| onChartReady | when the chart is ready, will callback the function with the `echarts object` as it's paramter. | function | — | -- |
| loadingOption | the echarts loading option config. | Object | — | -- |
| showLoading | when the chart is rendering, show the loading mask. | Bool | — | false |
| onEvents | binding the echarts event, will callback with the `echarts event object` | Object | — | {} |

更多事件请看: [http://echarts.baidu.com/api.html#events](http://echarts.baidu.com/api.html#events)