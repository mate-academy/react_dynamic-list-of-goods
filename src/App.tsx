import React from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type Props = {};

type State = {
  goods: Good[],
};

class App extends React.Component<Props, State> {
  state: State = {
    goods: [],
  };

  loadGoods = async (func: () => Promise<Good[]>) => {
    const goods = await func();

    return this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="ui segment">
        <h1 className="title">Dynamic list of Goods</h1>
        <div
          className="ui tree top attached buttons"
        >
          <button
            className="ui teal button"
            type="button"
            onClick={() => this.loadGoods(getAll)}
          >
            All Goods
          </button>
          <button
            className="ui teal button"
            type="button"
            onClick={() => this.loadGoods(get5First)}
          >
            First 5 Goods
          </button>
          <button
            className="ui teal button"
            type="button"
            onClick={() => this.loadGoods(getRedGoods)}
          >
            Red Goods
          </button>
        </div>
        {goods.length !== 0 && (
          <div className="ui attached segment">
            <GoodsList goods={goods} />
          </div>
        )}
      </div>

    );
  }
}

export default App;
