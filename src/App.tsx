import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Actions from './components/Actions';

const URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

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
    fetch(URL)
      .then(response => response.json())
      .then(goods => {
        return this.setState({
          goods,
          isStarted: true,
        });
      });
  };

  onShowFive = () => {
    this.setState(prevState => {
      const newGoods = prevState.goods
        .sort((a, b) => a.name.localeCompare(b.name));

      if (newGoods.length > 5) {
        newGoods.length = 5;
      }

      return {
        goods: [...newGoods],
      };
    });
  };

  onShowRed = () => {
    this.setState(prevState => ({
      goods: prevState.goods.filter(good => good.color === 'red'),
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
