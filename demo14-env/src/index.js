const dom = $('<div>');
dom.html(_.join(['dell', 'lee', 'ddd'], '  '));
$('body').append(dom);
console.log('hello world');
// 使用imports-loader?this=>window 将原本this指向module模块重新指向window
console.log(this === window);