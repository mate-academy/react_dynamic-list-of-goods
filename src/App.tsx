import React from 'react';
import './App.scss';
import { get5First, getAll, getRedGoods } from './api/goods';
import { GoodList } from './component/GoodsList';

type State = {
  goods: Good[];
};

export class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  handleGetGoods = async () => {
    const goodsAll = await getAll();

    this.setState({ goods: goodsAll });
  };

  handleGet5FirstGoods = async () => {
    const goods5First = await get5First();

    this.setState({ goods: goods5First });
  };

  handleGetRedGoods = async () => {
    const goodsRed = await getRedGoods();

    this.setState({ goods: goodsRed });
  };

  render() {
    return (
      <div className="box p-10">
        <button
          type="button"
          onClick={this.handleGetGoods}
          className="button is-info mr-5"
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={this.handleGet5FirstGoods}
          className="button is-info mr-5"
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={this.handleGetRedGoods}
          className="button is-info"
        >
          Load red goods
        </button>
        <GoodList goods={this.state.goods} />
      </div>
    );
  }
}
