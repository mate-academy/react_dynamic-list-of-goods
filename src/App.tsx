import React from 'react';
import './App.scss';
import { GoodsList } from './api/components/GoodsList';
import { Good } from './react-app-env';
import { getAll, get5First, getRed } from './api/goods';

type State = {
  goods: Good[]
};
export class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  getGoods = async (type: () => Promise<Good[]>) => {
    const goods = await type();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    const { getGoods } = this;

    return (

      <div>
        <button
          type="button"
          onClick={() => getGoods(getAll)}
        >
          Load ALL goods
        </button>
        <button
          type="button"
          onClick={() => getGoods(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => getGoods(getRed)}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}
