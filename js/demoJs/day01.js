/*
 * type - 基本层类型
 * 0 - 信息框，默认
 * 1 - 页面层(常用)
 * 2 - iframe层
 * 3 - 加载层
 * 4 - tips层
 */

// content - 内容
function content() {
    var content0 = layer.open({
        type: 1,
        content: '传入任意的文本或html'
    });
    var content1 = layer.open({
        type: 1,
        content: $('#content')
    });
    $.post('url', {}, function (str) {
        layer.open({
            type: 1,
            content: str
        });
    });
    var content3 = layer.open({
        type: 2,
        content: 'http://sentsin.com'
    });
    var content4 = layer.open({
        type: 4,
        content: ['内容', '#content']
    });
// skin - 样式类名

// skin - 样式类名
// skin - 样式类名
// skin - 样式类名
// skin - 样式类名
// skin - 样式类名
}