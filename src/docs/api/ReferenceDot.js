export default {
  name: 'ReferenceDot',
  props: [
    {
      name: 'xAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The id of x-axis which is corresponding to the data.',
    }, {
      name: 'yAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The id of y-axis which is corresponding to the data.',
    }, {
      name: 'x',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: false,
      desc: 'If the x-axis specified by xAxisId is a number axis, the type of x must be Number. If the x-axis specified by xAxisId is a category axis, the value of x must be one of the categorys, otherwise no dot will be drawn.',
    }, {
      name: 'y',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: false,
      desc: 'If the y-axis specified by yAxisId is a number axis, the type of y must be Number. If the y-axis specified by yAxisId is a category axis, the value of y must be one of the categorys, otherwise no dot will be drawn.',
    }, {
      name: 'alwaysShow',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If set true, the value of reference dot will be take into account when calculate the domain of corresponding axis, so that the reference dot will always show.',
    }, {
      name: 'xAxis',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The configuration of the corresponding x-axis, usually calculated internally.',
    }, {
      name: 'yAxis',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The configuration of the corresponding y-axis, usually calculated internally.',
    }, {
      name: 'label',
      type: 'String | Number | ReactElement | Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'If set a string or a number, default label will be drawn, and the option is content. If set a React element, the option is the custom react element of drawing label. If set a function, the function will be called to render customized dot.',
      format: [
        `<ReferenceDot x="a" y={400} label="MAX"/>`,
        `<ReferenceDot x="a" y={400} label={<CustomizedLabel />}/>`,
        `<ReferenceDot x="a" y={400} label={renderLabel}/>`,
      ],
    }, {
      name: 'isFront',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If set true, the dot will be rendered in front of bars in BarChart, etc.'
    },
  ],
};
