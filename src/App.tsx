import React, { Component } from 'react';
import './App.css';
import { getGoods } from './api/getGoods';
import { Good } from './interfaces';

import { GoodsList } from './components/GoodsList';
import { GoodsListButtons } from './components/GoodsListButtons';

interface State {
  goods: Good[];
}

class App extends Component<{}, State> {
  state: State = {
    goods: [],
  };

  handleClickAllGoods = () => {
    getGoods().then(goods => this.setState({
      goods,
    }));
  };

  handleClickFirstFive = () => {
    getGoods().then(goods => this.setState({
      goods: goods
        .sort((a, b) => a.name.localeCompare(b.name))
        .splice(0, 5),
    }));
  };

  handleClickOnlyRed = () => {
    getGoods().then(goods => this.setState({
      goods: goods.filter((good) => good.color === 'red'),
    }));
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="container is-fluid">
        <h1 className="title">List of goods</h1>
        <GoodsListButtons
          handleClickAllGoods={this.handleClickAllGoods}
          handleClickFirstFive={this.handleClickFirstFive}
          handleClickOnlyRed={this.handleClickOnlyRed}
        />
        <div className="menu">
          <p className="menu-label">
            Goods
          </p>
          <GoodsList goods={goods} />
        </div>
      </div>
    );
  }
}

export default App;
