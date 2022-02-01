import React from 'react';
import './App.scss';
import { get5First, getAll, getRedGoods } from './api/goods';
import { GoodList } from './component/GoodsList';

type State = {
  goods: Good[];
  initialize: boolean,
};

export class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    initialize: false,
  };

  handleGetGoods = async (getGoods: Promise<Good[]>) => {
    const goodsAll = await getGoods;

    this.setState({
      goods: goodsAll,
      initialize: true,
    });
  };

  render() {
    return (
      <div className="box p-10">
        <button
          type="button"
          onClick={() => this.handleGetGoods(getAll())}
          className="button is-info mr-5"
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => this.handleGetGoods(get5First())}
          className="button is-info mr-5"
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.handleGetGoods(getRedGoods())}
          className="button is-info"
        >
          Load red goods
        </button>
        {this.state.initialize && <GoodList goods={this.state.goods} />}
      </div>
    );
  }
}
