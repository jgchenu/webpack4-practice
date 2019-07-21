import './index.css';
import counter from './counter';
var btn = document.createElement('button');
btn.innerHTML = '新增';
document.body.appendChild(btn);
btn.onclick = function() {
  var div = document.createElement('div');
  div.className = 'item';
  div.innerHTML = 'item';
  document.body.appendChild(div);
};
counter();

// 如果开启了hotOnly的话
// if (module.hot) {
//   module.hot.accept('./counter.js', () => {
//     document.body.removeChild(document.getElementById('counter'));
//     counter();
//   });
// }
