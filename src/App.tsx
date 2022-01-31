import React from 'react';
import 'bulma/css/bulma.min.css';
import './App.scss';

import { get5First, getAll, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

type State = {
  goods: Good[],
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  showGoods = async (
    getter: () => Promise<Good[]>,
  ) => {
    const goods = await getter();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="
        is-flex
        is-flex-direction-column is-align-items-center"
      >
        <h1 className="title">Dynamic list of Goods</h1>
        <div>
          <button
            type="button"
            className="
              button
              mr-4
              is-link
              is-light
              is-outlined"
            onClick={() => this.showGoods(getAll)}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="
              button
              mr-4
              is-link
              is-light
              is-outlined"
            onClick={() => this.showGoods(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="
              button
              mr-4
              is-link
              is-light
              is-outlined"
            onClick={() => this.showGoods(getRedGoods)}

          >
            Load red goods
          </button>
        </div>
        {goods.length > 0 && (
          <GoodsList goods={goods} />
        )}
      </div>
    );
  }
}

export default App;
