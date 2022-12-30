module.exports = {
    "plugins": {
      "postcss-import": {},
      "postcss-url": {},
      "postcss-aspect-ratio-mini": {},//用来处理元素容器宽高比
      "postcss-write-svg": {//用于处理1px问题
        utf8: false
      },
      "postcss-cssnext": {},//让我们能使用CSS未来的特性
      "postcss-px-to-viewport": {
        viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750 （因为第三方控件适配所以 除以二 设置为 375）
        viewportHeight: 667, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置 （因为第三方控件适配所以 除以二 设置为 667）
        unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
        viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
        selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
        mediaQuery: false // 允许在媒体查询中转换`px`
      },
      "postcss-viewport-units":{//用来处理伪类
        filterRule: rule => rule.selector.includes('::after') && rule.selector.includes('::before') && rule.selector.includes(':after') && rule.selector.includes(':before')
      },
      "cssnano": {//主要用来压缩和清理CSS代码
        preset: "advanced",
        autoprefixer: false,
        "postcss-zindex": false
      },
    }
  }