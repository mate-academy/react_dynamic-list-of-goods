import React from 'react';
import 'bulma';
import './App.scss';
import classNames from 'classnames';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
    isLoading: false,
  }

  loadAllGoods = async() => {
    this.setState({ isLoading: true });
    const goods = await getAll();

    this.setState({
      goods,
      isLoading: false,
    });
  }

  load5Goods = async() => {
    const goods = await get5First();

    this.setState({ goods });
  }

  loadRedGoods = async() => {
    const goods = await getRed();

    this.setState({ goods });
  }

  render() {
    return (
      <div className="goods-container">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          className={classNames(
            'button is-success',
            { 'is-loading': this.state.isLoading },
          )}
          onClick={this.loadAllGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          className={classNames(
            'button is-warning',
            { 'is-loading': this.state.isLoading },
          )}
          onClick={this.load5Goods}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          className={classNames(
            'button is-danger',
            { 'is-loading': this.state.isLoading },
          )}
          onClick={this.loadRedGoods}
        >
          Load red goods
        </button>
        <GoodsList
          goods={this.state.goods}
        />
      </div>
    );
  }
}

export default App;
