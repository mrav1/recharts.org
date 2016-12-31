export default {
  name: 'YAxis',
  props: [
    {
      name: 'hide',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: {
        'en-US': 'If set true, the axis do not display in the chart.',
        'zh-CN': '是否隐藏y轴。',
      },
    }, {
      name: 'dataKey',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The key of data displayed in the axis.',
        'zh-CN': '指定展示的数据维度。',
      },
    }, {
      name: 'yAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The unique id of y-axis.',
        'zh-CN': 'y 轴的唯一id。',
      },
    }, {
      name: 'width',
      type: 'Number',
      defaultVal: '60',
      isOptional: false,
      desc: {
        'en-US': 'The width of axis, which can be setted by user.',
        'zh-CN': 'y轴的宽度，这个可以根据需要进行配置。',
      },
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The height of axis which is usually calculated internally.',
        'zh-CN': 'y轴的高度，一般在图表内部计算。'
      },
    }, {
      name: 'orientation',
      type: '\'left\' , \'right\'',
      defaultVal: '\'left\'',
      isOptional: false,
      desc: {
        'en-US': 'The orientation of axis.',
        'zh-CN': 'y轴的位置。',
      },
    }, {
      name: 'type',
      type: '\'number\' , \'category\'',
      defaultVal: '\'number\'',
      isOptional: false,
      desc: {
        'en-US': 'The type of axis.',
        'zh-CN': 'y轴的类型： 数值轴、类目轴。',
      },
    }, {
      name: 'tickCount',
      type: 'Number',
      defaultVal: '5',
      isOptional: false,
      desc: {
        'en-US': 'The count of axis ticks.',
        'zh-CN': '刻度数。',
      },
      name: 'domain',
      type: 'Array',
      defaultVal: `[0, 'auto']`,
      isOptional: true,
      desc: {
        'en-US': `Specify the domain of axis when the axis is a number axis. The length of domain should be 2, and we will validate the values in domain. And each element in the array can be a number, 'auto', 'dataMin', 'dataMax' or string like 'dataMin - 20', 'dataMax + 100'. If any element of domain is set to be 'auto', comprehensible scale ticks will be calculated, and the final domain of axis is generated by the ticks.`,
        'zh-CN': '当y轴是数值轴时，通过这个配置可以指定y轴刻度函数的定义域。这个配置是一个二元数组，数组中的元素可以是一个数值，"auto", "dataMin", "dataMax" 或者类似于"dataMin - 100", "dataMax + 200"这样的字符串。如果任意元素的取值为"auto"，我们会生成可读性高的刻度，并且保证设置的刻度数。',
      },
      format: [
        `<YAxis type="number" domain={['dataMin', 'dataMax']} />`,
        `<YAxis type="number" domain={[0, 'dataMax']} />`,
        `<YAxis type="number" domain={['auto', 'auto']} />`,
        `<YAxis type="number" domain={[0, 'dataMax + 1000']} />`,
        `<YAxis type="number" domain={['dataMin - 100', 'dataMax + 100']} />`,
      ],
      examples: [{
        name: 'Numeric XAxis with specified domain',
        url: '/examples#VerticalLineChartWithSpecifiedDomain',
      }],
    }, {
      name: 'interval',
      type: '"preserveStart" | "preserveEnd" | "preserveStartEnd" | Number',
      defaultVal: '\'preserveEnd\'',
      isOptional: false,
      desc: {
        'en-US': 'If set "preserveStart", "preserveEnd" or "preserveStartEnd", the labels which is to be showed or hided will be calculated autoly.',
        'zh-CN': '当值为 "preserveStart" 时，根据刻度的宽度自动计算间隔，在有足够的空间的情况下，会从头部的刻度开始计算。当值为 "preserveEnd" 时，会从尾部的刻度开始计算是否展示。当值为"preserveStartEnd"，会从头部、尾部的刻度开始计算向中间计算是否展示。',
      },
    }, {
      name: 'padding',
      type: 'Object',
      defaultVal: `{ top: 0, bottom: 0 }`,
      isOptional: false,
      desc: {
        'en-US': `Specify the padding of y-axis. It's similar to padding of XAxis.`,
        'zh-CN': '指定内边距',
      },
      format: [
        `<YAxis padding={{ top: 10 }} />`,
        `<YAxis padding={{ bottom: 20 }} />`,
        `<YAxis padding={{ top: 20, bottom: 20 }} />`,
      ],
      examples: [{
        name: 'XAxis with non-zero padding',
        url: '/examples#LineChartWithXAxisPading'
      }]
    }, {
      name: 'minTickGap',
      type: 'Number',
      defaultVal: '5',
      isOptional: false,
      desc: {
        'en-US': 'The minimum gab between two adjacent labels.',
        'zh-CN': '两个刻度之前最小间隔宽度。',
      },
    }, {
      name: 'allowDecimals',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US': 'Allow the ticks of YAxis to be decimals or not.',
        'zh-CN': '是否允许小数类型的刻度。',
      },
    }, {
      name: 'axisLine',
      type: 'Boolean | Object',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US': 'If set false, no axis line will be drawn. If set a object, the option is the configuration of axis line.',
        'zh-CN': '轴线配置。当值为 false 时，不绘制轴线。当值为对象类型时，会把这个对象解析成 轴线 的属性配置。',
      },
    }, {
      name: 'tickLine',
      type: 'Boolean | Object',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US': 'If set false, no axis tick lines will be drawn. If set a object, the option is the configuration of tick lines.',
        'zh-CN': '刻度线配置。当值为 false 时，不绘制刻度线。当值为对象类型时，会把这个对象解析成 刻度线 的属性配置。',
      },
    }, {
      name: 'tickSize',
      type: 'Number',
      defaultVal: '6',
      isOptional: false,
      desc: {
        'en-US': 'The length of tick line.',
        'zh-CN': '刻度线的长度。',
      },
    }, {
      name: 'tickFormatter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The formatter function of tick.',
        'zh-CN': '刻度的格式化函数。',
      },
    }, {
      name: 'ticks',
      type: 'Array',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'Set the values of axis ticks manually.',
        'zh-CN': '指定需要展示的刻度。',
      },
    }, {
      name: 'tick',
      type: 'Boolean | Object | ReactElement',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'If set false, no ticks will be drawn. If set a object, the option is the configuration of ticks. If set a React element, the option is the custom react element of drawing ticks.',
        'zh-CN': '刻度配置。当值为 false 时，不绘制刻度。当值为对象类型时，会把这个对象解析成 刻度 的属性配置。当值为 React element，会克隆这个元素来渲染刻度。'
      },
      format: [
        `<YAxis tick={false} />`,
        `<YAxis tick={{stroke: 'red', strokeWidth: 2}} />`,
        `<YAxis tick={<CustomizedTick />} />`,
      ],
    }, {
      name: 'label',
      type: 'String | Number | ReactElement',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'If set a string or a number, default label will be drawn, and the option is content. If set a React element, the option is the custom react element of drawing label.',
        'zh-CN': '当值为简单类型的数值或者字符串时，这个值会被渲染成文字标签。当值为 React element，会克隆这个元素来渲染文字标签。',
      },
      format: [
        `<YAxis label="Height" />`,
        `<YAxis label={<CustomizedLabel />} />`,
      ],
      examples: [
        {
          name: 'A composed chart with axis labels',
          url: '/examples#ComposedChartWithAxisLabels',
        },
      ],
    }, {
      name: 'scale',
      type: `'auto' | 'linear' | 'pow' | 'sqrt' | 'log' | 'identity' | 'time' |
        'band' | 'point' | 'ordinal' | 'quantile' | 'quantize' | 'utcTime' | 'sequential' |
        'threshold' | Function`,
      defaultVal: 'auto',
      isOptional: false,
      desc: {
        'en-US': `If 'auto' set, the scale funtion is descided by the type of chart, and the props type.`,
        'zh-CN': '当值为 "auto" 时，会根据图表类型来生成 scale 函数，也可以传入自定义的函数作为 scale 函数。',
      },
      format: [
        '<YAxis scale="log" />',
        `
import { scaleLog } from 'd3-scale';
const scale = scaleLog().base(Math.E);

...
  <YAxis scale={scale} />
...
`
      ],
    }, {
      name: 'unit',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The unit of data displayed in the axis. This option will be used to represent an index unit in a scatter chart.',
        'zh-CN': 'y 轴展示数据的单位。这个单位会展示在 Tooltip 的数值后面。'
      },
    }, {
      name: 'name',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The name of data displayed in the axis. This option will be used to represent an index in a scatter chart.',
        'zh-CN': 'y 轴展示数据的名称。这个单位会展示在 Tooltip 内容中。'
      },
    }, {
      name: 'onClick',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of click on the ticks of this axis',
        'zh-CN': '刻度 click 事件的回调函数。',
      },
    }, {
      name: 'onMouseDown',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousedown on the the ticks of this axis',
        'zh-CN': '刻度 mousedown 事件的回调函数。',
      },
    }, {
      name: 'onMouseUp',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseup on the ticks of this axis',
        'zh-CN': '刻度 mouseup 事件的回调函数。',
      },
    }, {
      name: 'onMouseMove',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousemove on the ticks of this axis',
        'zh-CN': '刻度 mousemove 事件的回调函数。',
      },
    }, {
      name: 'onMouseOver',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseover on the ticks of this axis',
        'zh-CN': '刻度 mouseover 事件的回调函数。',
      },
    }, {
      name: 'onMouseOut',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US':'The customized event handler of mouseout on the ticks of this axis',
        'zh-CN': '刻度 mouseout 事件的回调函数。',
      },
    }, {
      name: 'onMouseEnter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of moustenter on the ticks of this axis',
        'zh-CN': '刻度 moustenter 事件的回调函数。',
      },
    }, {
      name: 'onMouseLeave',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseleave on the ticks of this axis',
        'zh-CN': '刻度 mouseleave 事件的回调函数。',
      },
    },
  ],
};
