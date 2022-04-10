import React from 'react';

import { GoodList } from './components/GoodsList';
import './App.scss';

import * as goodsAPI from './api/goods';
// import { getAll, get5First, getRedGoods } from './api/goods';

type Props = {};
type State = {
  goods: Good[];
};
type CallbackFunction = () => Promise<Good[]>;

class App extends React.Component<Props, State> {
  state: State = {
    goods: [],
  };

  load = async (callback: CallbackFunction) => {
    const goods = await callback();

    this.setState({
      goods: [...goods],
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App content">
        <h1 className="title">
          Dynamic list of Goods
        </h1>
        <div className="buttons">
          <button
            className="button is-primary is-small"
            type="button"
            onClick={() => this.load(goodsAPI.getAll)}
          >
            Load All goods
          </button>
          <button
            className="button is-info is-small"
            type="button"
            onClick={() => this.load(goodsAPI.get5First)}
          >
            Load 5 first goods
          </button>
          <button
            className="button is-success is-small is-small"
            type="button"
            onClick={() => this.load(goodsAPI.getRedGoods)}
          >
            Load red goods
          </button>
        </div>
        {goods.length > 0
          ? <GoodList goods={goods} />
          : (
            <p
              className="paragraph"
            >
              Any item didn&apos;t load yet
            </p>
          )}
      </div>
    );
  }
}

export default App;
