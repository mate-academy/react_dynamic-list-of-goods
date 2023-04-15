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
    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          data-cy="all-button"
          onClick={() => {
            goodsAPI.getAll()
              .then(items => {
                this.setState({ goods: items });
              });
          }}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={() => {
            goodsAPI.get5First()
              .then(items => {
                this.setState({ goods: items });
              });
          }}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={() => {
            goodsAPI.getRedGoods()
              .then(items => {
                this.setState({ goods: items });
              });
          }}
        >
          Load red goods
        </button>

        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}
