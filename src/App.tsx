import React, { Component } from 'react';
import './App.css';
import { Good } from './types';
import { getGoods } from './API/API';

type State = {
  goods: Good[],
}

class App extends Component<{}, State> {
  state: State = {
    goods: [],
  }

  componentDidMount() {
    getGoods()
      .then(({ data }) => this.setState({
        goods: data,
      }))
      .catch(error => {
        throw new Error(error.message)
      })
  }

  render() {
    return (
      <h1>Test</h1>
    )
  }
}

export default App;
