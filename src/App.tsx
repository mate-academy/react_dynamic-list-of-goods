/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { getRedGoods, get5First, getAll } from './api/goods';
import { GoodsList } from './GoodsList/GoodsList';

type State = {
  goods: Good[],
  showGoods: boolean,
};

export class App extends React.PureComponent<{}, State> {
  state:State = {
    goods: [{
      id: NaN,
      name: '',
      color: '',
    }],
    showGoods: false,
  };

  handleButton = async (goodsFilter: Promise<Good[]>) => {
    const goods = await goodsFilter;

    this.setState({
      goods,
      showGoods: true,
    });
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <div>
          <button
            type="button"
            onClick={() => this.handleButton(getAll())}
          >
            Load All goods
          </button>
          {' '}
          <button
            type="button"
            onClick={() => this.handleButton(get5First())}
          >
            Load 5 first goods
          </button>
          {' '}
          <button
            type="button"
            onClick={() => this.handleButton(getRedGoods())}
          >
            Load red goods
          </button>
        </div>
        {this.state.showGoods && <GoodsList goods={this.state.goods} />}
      </>
    );
  }
}
