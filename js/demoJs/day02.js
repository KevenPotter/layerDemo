// 快速使用
laydate.render({
    elem: '#text0'
});
// elem - 绑定元素
laydate.render({
    elem: document.getElementById('text1')
});
// type - 控件选择类型
laydate.render({
    elem: '#text2',
    // type: 'year'
    // type: 'month'
    // type: 'date'
    // type: 'time'
    type: 'datetime'
});
// range - 开启左右面板范围选择
laydate.render({
    elem: '#text3',
    type: 'date',
    // range: true
    range: '~'
});
// format - 自定义格式
laydate.render({
    elem: '#text4',
    format: 'yyyy年MM月dd日'
});
// value - 初始值
laydate.render({
    elem: '#text5',
    // value: '2018-08-18'
    value: new Date()
});
// isInitValue - 初始值填充
laydate.render({
    elem: '#text6',
    value: new Date(),
    isInitValue: false
});
// min/max - 最小/大范围内的日期时间值
laydate.render({
    elem: '#text7',
    min: -30,
    max: 30
});
// trigger - 自定义弹出控件的事件
laydate.render({
    elem: '#text8',
    trigger: 'click'
});
// show - 默认显示
laydate.render({
    elem: '#text9',
    show: false, // 不直接显示
});
// position - 定位方式
laydate.render({
    elem: '#text10',
    position: 'static',
    change: function (value, date) {
        lay('#testView').html(value);
    }
});
// zIndex - 层叠顺序
laydate.render({
    elem: '#text11',
    zIndex: 11111111
});
// showBottom - 是否显示底部栏
laydate.render({
    elem: '#text12',
    showBottom: false
});
// btns - 工具按钮
laydate.render({
    elem: '#text13',
    btns: ['clear', 'confirm']
});
// lang - 语言
laydate.render({
    elem: '#text14',
    lang: 'en'
});
// theme - 主题
laydate.render({
    elem: '#text15',
    // theme: 'molv'
    // theme: 'grid'
    theme: '#393D49'
});
// calendar - 是否显示公历节日
laydate.render({
    elem: '#text16',
    calendar: true
});
// mark - 标注重要日子
laydate.render({
    elem: '#text17',
    mark: {
        '0-3-24': '生日',
        '0-12-31': '跨年',
        '0-0-14': '工资',
        '2017-9-25': '',
        '2018-10-15': '涨薪'
    },
    done: function (value, date) {
        if (date.year === 2019 && date.month === 8 && date.date === 15) {
            ins1.hint('中国人民抗日战争胜利94周年');
        }
    }
});
// 控件初始打开的回调
laydate.render({
    elem: '#text18',
    ready: function (date) {
        layer.msg(date.year + "-" + date.month + "-" + date.date);
    }
});
// 日期时间被切换后的回调
laydate.render({
    elem: '#text19',
    range: true,
    change: function (value, date, endDate) {
        console.log(value); // 得到日期生成的值，如：2017-08-18
        console.log(date); // 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
        console.log(endDate); // 得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上
    }
});
// 控件选择完毕后的回调
laydate.render({
    elem: '#text20',
    range: true,
    done: function (value, date, endDate) {
        console.log(value);
        console.log(date);
        console.log(endDate);
    }
});
// 弹出控件提示
laydate.render({
    elem: '#text21',
    range: true,
    change: function (value, date, endDate) {
        layer.msg(value, {icon: 1});
    }
});