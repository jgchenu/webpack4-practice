import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import List from './List';
class App extends Component {
  componentDidMount() {
    axios.get('/react/api/header.json').then(res => {
      console.log(res);
    });
  }
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/list" component={List} />
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
