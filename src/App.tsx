import React from 'react';
import './App.scss';
import { ListOfGoods } from './ListOfGoods';
import { getAll, getFive, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  LoadAll = () => {
    getAll()
      .then(goodsFromServer => {
        this.setState({ goods: goodsFromServer });
      });
  };

  Load5 = () => {
    getFive()
      .then(goodsFromServer => {
        this.setState({ goods: goodsFromServer });
      });
  };

  LoadRed = () => {
    getRed()
      .then(goodsFromServer => {
        this.setState({ goods: goodsFromServer });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <section>
        <h1>Dynamic list of Goods</h1>
        <button type="button" onClick={this.LoadAll}>Load All</button>
        <button type="button" onClick={this.Load5}>Load 5 first goods</button>
        <button type="button" onClick={this.LoadRed}>Load red goods</button>
        <ListOfGoods goods={goods} />
      </section>
    );
  }
}

export default App;
