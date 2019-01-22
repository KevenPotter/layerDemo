// 全局配置
layui.config({
    dir: '../layui/', // layui.js 所在路径（注意，如果是script单独引入layui.js，无需设定该参数。），一般情况下可以无视
    version: false, // 一般用于更新模块缓存，默认不开启。设为true即让浏览器不缓存。也可以设为一个固定的值，如：201610
    debug: false, // 用于开启调试模式，默认false，如果设为true，则JS模块的节点会保留在页面
    base: '' // 设定扩展的Layui模块的所在目录，一般用于外部模块扩展
});
// 定义模块
layui.define(function (exports) {
    // do something
    exports('demo', function () {
        alert('Hello World Demo Modular');
    });
});
// 也可以在定义一个模块的时候，声明该模块所需的依赖
layui.define(['layer', 'laypage'], function (exports) {
    // do something
    exports('demo', function () {
        alert('Hello World Demo Modular');
    });
});
// 加载所需模块
layui.use(['laypage', 'layedit'], function () {
    let laypage = layui.laypage, layedit = layui.layedit;
    // do something
});
// 也可以不通过layui对象赋值获得接口
layui.use(['laypage', 'layedit'], function (laypage, layedit) {
    // 使用分页
    laypage();
    // 建立编辑器
    layedit.build();
});
// 本地存储
// [增]:向test表插入一个nickname字段，如果该表不存在，则自动建立。
layui.data('test', {
    key: 'nickname',
    value: 'KevenPotter'
});
// [删]:删除test表的nickname字段
layui.data('test', {
    key: 'nickname',
    remove: true
});
layui.data('test', null); // 删除test表
// [改]:同[增]，会覆盖已经存储的数据
// [查]:向test表读取全部的数据
let localTest = layui.data('test');
console.log(localTest.nickname); // 获得"KevenPotter"
// 获取设备信息
let device0 = layui.device();
//device即可根据不同的设备返回下述不同的信息
// {
//     os: "windows" //底层操作系统，windows、linux、mac等,
//     ie: false //ie6-11的版本，如果不是ie浏览器，则为false,
//     weixin: false //是否微信环境,
//     android: false //是否安卓系统,
//     ios: false //是否ios系统
// }
// 验证当前的WebView是否在你的App环境
let device1 = layui.device('myapp');
if (device1.myapp) {
    alert('在我的APP环境');
}