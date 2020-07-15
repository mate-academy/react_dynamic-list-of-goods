import React, { Component } from 'react';
import './App.css';
import { Good } from './types';
import { getGoods } from './API/API';
import { GoodsList } from './Components/GoodsList'

type State = {
  goods: Good[];
};

class App extends Component<{}, State> {
  state: State = {
    goods: [],
  };

  componentDidMount() {
    getGoods()
      .then(({ data }) => this.setState({
        goods: data,
      }))
      .catch(error => {
        throw new Error(error.message)
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <GoodsList goods={goods} />
    );
  }
}

export default App;
