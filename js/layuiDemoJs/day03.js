// 预先加载
// 使用Layui的form和upload模块
layui.use(['form', 'upload'], function () { // 如果只加载一个模块,可以不填数组.如layui.use('form')
    let form = layui.form, upload = layui.upload; // 获取form和upload模块
    // 监听提交按钮
    form.on('submit(test)', function (data) {
        console.log(data);
    });
    // 实例化一个上传控件
    upload({
        url: '上传接口url',
        success: function (data) {
            console.log(data);
        }
    });
});
// 按需加载(不推荐)
// 按需加载一个Layui模块
// ...
// 你的各种JS代码什么的
// ...
button.addEventListener('click', function () {
    layui.use('laytpl', function (laytpl) { // 温馨提示:多次调用use并不会重复加载laytpl.js,Layui内部有做模块cache处理
        let html = laytpl('').render({});
        console.log(html);
    });
});
// 模块命名空间
layui.use(['layer', 'laypage', 'laydate'], function () {
    let layer = layui.layer, laypage = layui.laypage, laydate = layui.laypage;
    // 使用模块
});
// 设定扩展模块所在的目录，然后就可以在别的JS文件中使用了
layui.config({
    base: '../../js/' // 假设这是你存放拓展模块的根目录
}).extend({ // 设定模块别名
    mymod: 'mymod', // 如果mymod.js是在根目录，也可以不用设定别名
    mod1: '' // 相对于上述base目录的子目录
});
// 使用拓展模块
layui.use(['mymod', 'mod1'], function () {
    var mymod = layui.mymod, mod1 = layui.mod1, mod2 = layui.mod2;
    mymod.hello('World');
});