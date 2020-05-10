import React, { Component } from 'react';
import './App.css';
import { GoodList, Goods } from './components/GoodList';
import { getElements } from './components/api';

interface State {
  goods: Array<Goods>;
  isLoading: boolean;
}

export default class App extends Component {
  state: State = {
    goods: [],
    isLoading: false,
  };

  downloadData = () => {
    this.setState({ isLoading: true });

    getElements().then(goods => {
      this.setState({ goods, isLoading: false });
    });
  };

  downloadSome = () => {
    this.setState({ isLoading: true });

    getElements().then(goods => {
      this.setState({
        goods: goods.sort((a: Goods, b: Goods) => a.name.localeCompare(b.name)).slice(0, 5),
        isLoading: false,
      });
    });
  };

  sortData = () => {
    this.setState({ isLoading: true });

    getElements().then(goods => {
      this.setState({
        goods: goods.filter((good: Goods) => good.color === 'red'),
        isLoading: false,
      });
    });
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div>
        <h1>List of Goods</h1>
        <div className="buttons">
          <button
            type="button"
            className="button"
            onClick={this.downloadData}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="button"
            onClick={this.downloadSome}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="button"
            onClick={this.sortData}
          >
            Load red goods
          </button>
        </div>
        {isLoading
          ? <p>Loading data</p>
          : <GoodList goods={this.state.goods} />}
      </div>
    );
  }
}
