


## LimitedRangePicker  
限制时间跨度的时间段选择

参数
@property {?number} rangeDays  可选 默认值7  可以选择的时间段最大跨度，单位（天）
备注：其他参数同 antd 的DatePicker组件

示例
import LimitedRangePicker from 'components/limitedRangePicker';
<LimitedRangePicker
	onChange={val => this.onSelect('times', val)}
	rangeDays={90}
	allowEmpty={false}
	style={{ width: 210 }}
/> 
效果图
![InputCount]('./readme/rangeDate.png')

## InputCount TextareaCount
文本框输入数字统计
本控件仅限于ant.design Form 中使用

参数
@property {number} maxLength 可选 默认值200  最多输入字符个数 
@property {number} ignore  可选 默认值false 是否区不分中文与非中文，进行无差别计数
                              false 差别计数 中文算1个字符，非中文算0.5个字符，
                              true 不区分  中文与非中文 都算1个字符
@property {function} onChange  可选 输入值改变后的回调函数

示例
(```)
import { InputCount, TextareaCount } from 'components/uiKits/inputCount';
{getFieldDecorator('title', {
  rules: [
	{
	  whitespace: true,
	  required: true,
	  message: '请填写备注标题',
	},
  ],
})(<InputCount maxLength={20} />)}
(```)
效果图：
![InputCount]('./readme/count.png')



## 
参数
/**
 * @property {number} span 可选 默认值10  显示数据一列的宽度占比
 *                         显示一列数据该值最大24，显示2列数据该值最大12；
 * @property {object} data 需要渲染的数据
 * @property {array } columns 列表的配置描述，详情如下
 */

/**
 * @public
 * @typedef columns
 * @property {string} title  列数据标题，若无标题，可不传
 * @property {array} maps 列数据渲染配置
 */

/**
 * @public
 * @typedef maps
 * @property {string} label  列数据项的显示字段名称
 * @property {string} key  列数据在数据项中对应的 key
 * @property {function} render  (val, data) => {}  可选的参数  生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，
 *                              return 一个需要渲染的值 可以是react元素，也可以是字符串 数字等
 *                              只显示数据项中对应的 key 的值时 ，该参数可以不写
 */

示例：
```
import InfoCard from 'components/infoCard';
const refundInfoColumns = [
  {
    title: '维权信息',
    maps: [
      {
        label: '维权类型',
        key: 'refundType',
        render: text => perTypeMap[text],
      },
      {
        label: '申请时间',
        key: 'createTime',
      },
    ],
  },
  {
    maps: [
      {
        label: '收货人姓名',
        key: 'receiverName',
      },
      {
        label: '收货人联系方式',
        key: 'receiverPhone',
      },
    ],
  },
];
<InfoCard columns={refundInfoColumns} data={viewRefund} />
```

效果图
![InputCount]('./readme/infocard.png')
