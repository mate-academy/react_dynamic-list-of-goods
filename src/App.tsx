import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

type State = {
  goods: Good[];
};

export class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  async componentDidMount() {
    goodsAPI.getAll()
      .then(items => {
        this.setState({ goods: items });
      });
  }

  render() {
    const handleGetAll = () => {
      goodsAPI.getAll()
        .then(items => {
          this.setState({ goods: items });
        });
    };

    const handleGet5First = () => {
      goodsAPI.get5First()
        .then(items => {
          this.setState({ goods: items });
        });
    };

    const handleGetRedGoods = () => {
      goodsAPI.getRedGoods()
        .then(items => {
          this.setState({ goods: items });
        });
    };

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          data-cy="all-button"
          onClick={handleGetAll}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={handleGet5First}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={handleGetRedGoods}
        >
          Load red goods
        </button>

        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}
