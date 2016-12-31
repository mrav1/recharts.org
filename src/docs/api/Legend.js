export default {
  name: 'Legend',
  desc: {
    'en-US': 'By default, the content of legend is generated by the name of Line, Bar, Area, etc. When no name has been setted, dataKey will be used to generate legend content alternatively.',
    'zh-CN': '注意，现在图例是使用 html 实现的。对于类目图表（LineChart, BarChart, AreaChart, ComposedChart, ScatterChart）以及 RadarChart 我们会根据组件的属性 "name" 来生成图例的内容，如果组件没有指定 "name" 属性，我们会根据组件的属性 "dataKey" 来生成图例的内容。对于极坐标图表 (PieChart, RadialBarChart) 我们会根据每个子组件的 "name" 属性值生成图例的内容。',
  },
  props: [
    {
      name: 'width',
      type: 'Number',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The width of legend.',
        'zh-CN': '图例的宽度。',
      },
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The height of legend.',
        'zh-CN': '图例的高度。',
      },
    }, {
      name: 'layout',
      type: '\'horizontal\', \'vertical\'',
      defaultVal: '\'horizontal\'',
      isOptional: false,
      desc: {
        'en-US': 'The layout of legend items.',
        'zh-CN': '图例的布局类型：横向布局，纵向布局。',
      },
    }, {
      name: 'align',
      type: '\'left\', \'center\', \'right\'',
      defaultVal: '\'center\'',
      isOptional: false,
      desc: {
        'en-US': 'The alignment of legend items in \'horizontal\' direction, which cen be \'left\', \'center\', \'right\'.',
        'zh-CN': '水平方向的对齐方式。',
      },
    }, {
      name: 'verticalAlign',
      type: '\'top\', \'middle\', \'bottom\'',
      defaultVal: '\'middle\'',
      isOptional: false,
      desc: {
        'en-US': 'The alignment of legend items in \'vertical\' direction, which can be \'top\', \'middle\', \'bottom\'.',
        'zh-CN': '垂直方向的对齐方式。',
      },
    }, {
      name: 'iconSize',
      type: 'Number',
      defaultVal: '14',
      isOptional: false,
      desc: {
        'en-US': 'The size of icon in each legend item.',
        'zh-CN': '图例中图标的大小。',
      },
    }, {
      name: 'payload',
      type: 'Array',
      defaultVal: '[]',
      isOptional: false,
      desc: {
        'en-US': 'The source data of the content to be displayed in the legend, usually calculated internally.',
        'zh-CN': '图例的源数据，通常内部计算，如果用户指定了这个值，会覆盖内部计算的值。',
      },
      format: ['[{ value: \'item name\', type: \'line\', id: \'ID01\' }]'],
    }, {
      name: 'chartWidth',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The width of chart container, usually calculated internally.',
        'zh-CN': '图表的宽度，通常父组件会传下来。',
      },
    }, {
      name: 'chartHeight',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The height of chart container, usually calculated internally.',
        'zh-CN': '图表的高度，通常父组件会传下来。',
      },
    }, {
      name: 'margin',
      type: 'Object',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The margin of chart container, usually calculated internally.',
        'zh-CN': '父组件的 marign 值。',
      },
      format: [`{ top: 0, left: 0, right: 0, bottom: 0 }`],
    }, {
      name: 'content',
      type: 'ReactElement | Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'If set to a React element, the option will be used to render the legend. If set to a function, the function will be called to render the legend\'s content.',
        'zh-CN': '定制图例展示的内容。如果值为 React element，会克隆这个元素来渲染图例的内容。如果值为函数，会调用这个函数来生成图例的内容。',
      },
      format: [
        `<Legend content={<CustomizedLegend external={external} />} />`,
        `
const renderLegend = (props) => {
  const { payload } = props;

  return (
    <ul>
      {
        payload.map((entry, index) => (
          <li key={\`item-\$\{index\}\`}>{entry.value}</li>
        ))
      }
    </ul>
  );
}
<Legend content={renderLegend} />`
      ],
    }, {
      name: 'wrapperStyle',
      type: 'Object',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The style of legend container which is a "position: absolute;" div element. Because the position of legend is quite flexible, so you can change the position by the value of top, left, right, bottom in this option. And the format of wrapperStyle is the same as React inline style.',
        'zh-CN': '图例是使用html渲染的，最外层的节点是一个绝对定位的 div ，所以你可以通过 top, left 来指定图例的位置，当然也可以指定其他的样式。 '
      },
      examples: [{
        name: 'React Inline style',
        url: 'https://facebook.github.io/react/tips/inline-styles.html',
      }],
    }, {
      name: 'onClick',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of click on the items in this group',
        'zh-CN': '图例每个项目 点击 事件的回调函数。',
      },
    }, {
      name: 'onMouseDown',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousedown on the items in this group',
        'zh-CN': '图例每个项目 mousedown 事件的回调函数。',
      },
    }, {
      name: 'onMouseUp',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseup on the items in this group',
        'zh-CN': '图例每个项目 mouseup 事件的回调函数。',
      },
    }, {
      name: 'onMouseMove',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousemove on the items in this group',
        'zh-CN': '图例每个项目 mousemove 事件的回调函数。',
      },
    }, {
      name: 'onMouseOver',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseover on the items in this group',
        'zh-CN': '图例每个项目 mouseover 事件的回调函数。',
      },
    }, {
      name: 'onMouseOut',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseout on the items in this group',
        'zh-CN': '图例每个项目 mouseout 事件的回调函数。',
      },
    }, {
      name: 'onMouseEnter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of moustenter on the items in this group',
        'zh-CN': '图例每个项目 moustenter 事件的回调函数。',
      },
    }, {
      name: 'onMouseLeave',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseleave on the items in this group',
        'zh-CN': '图例每个项目 mouseleave 事件的回调函数。',
      },
    },
  ],
};
