import Header from './header';
import Content from './content';
import Sidebar from './sidebar';
import avatar from './avatar.jpeg';
import style from './index.less';
// webpack -v 打印的是全局的webpack的版本
// npx webpack -v 打印的是项目的webpack版本
var img = new Image();
img.src = avatar;
img.className = style.avatar;
console.log(avatar);
var dom = document.getElementById('root');
dom.appendChild(img);
new Header();
new Sidebar();
new Content();
