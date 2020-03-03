import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Actions from './components/Actions';
import { loadGoods } from './api/loadGoods';

interface State {
  goods: Good[];
  isStarted: boolean;
}

export default class App extends Component<{}, State> {
  state = {
    goods: [],
    isStarted: false,
  };

  onShowAll = () => {
    loadGoods()
      .then(goods => {
        return this.setState({
          goods,
          isStarted: true,
        });
      });
  };

  onShowFive = () => {
    loadGoods()
      .then(goods => this.setState({
        goods: goods
          .sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
      }));
  };

  onShowRed = () => {
    loadGoods()
      .then(goods => this.setState({
        goods: goods.filter(good => good.color === 'red'),
      }));
  };

  render() {
    const { goods, isStarted } = this.state;

    return (
      <>
        <Actions
          handleAll={this.onShowAll}
          handleFive={this.onShowFive}
          handleRed={this.onShowRed}
        />
        {!isStarted
          ? (<div className="start">Press All to start</div>)
          : (<List goods={goods} />)}
      </>
    );
  }
}
