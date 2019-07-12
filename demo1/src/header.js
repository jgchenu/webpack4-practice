function Header() {
  var dom = document.getElementById('root');
  var header = document.createElement('div');
  header.innerText = 'header';
  dom.appendChild(header);
}

export default Header;