import React from 'react';
import ReactDom from 'react-dom';
import Child from '@/Child';
import _ from 'lodash';
class App extends React.Component {
  render() {
    return (
      <div>
        <div>this is App ,{_.join(['a', 'b'], '*')}</div>
        <Child />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
