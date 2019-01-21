// 快速上手
layui.use(['layer', 'form'], function () {
    let layer = layui.layer, form = layui.form;
    layer.msg("Hello World day01.js");
});
// 模块化的用法(推荐)
layui.config({
    base: '../../js/'
}).use('index');