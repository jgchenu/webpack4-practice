import Header from './header';
import Content from './content';
import Sidebar from './sidebar';
import avatar from './people.jpeg';
// webpack -v 打印的是全局的webpack的版本
// npx webpack -v 打印的是项目的webpack版本
var img = new Image();
img.src = avatar;
console.log(avatar);
new Header();
new Sidebar();
new Content();
