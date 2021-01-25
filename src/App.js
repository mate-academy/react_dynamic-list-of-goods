import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  selectAll = () => {
    getAll()
      .then((result) => {
        this.setState({
          goods: [...result],
        });
      });
  }

  selectFive = () => {
    get5First()
      .then((result) => {
        this.setState({
          goods: [...result],
        });
      });
  }

  selectRed = () => {
    getRedGoods()
      .then((result) => {
        this.setState({
          goods: [...result],
        });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button type="button" onClick={this.selectAll}>show all</button>
        <button type="button" onClick={this.selectFive}>show 5</button>
        <button type="button" onClick={this.selectRed}>show red</button>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;
