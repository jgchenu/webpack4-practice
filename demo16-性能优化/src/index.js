import React from 'react';
import ReactDom from 'react-dom';
import Child from '@/Child';
class App extends React.Component {
  render() {
    return (
      <div>
        <div>this is App</div>
        <Child />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
