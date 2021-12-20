import React from 'react';
import './App.scss';

import { Goodslist } from './components/GoodsList/GoodsList';
import * as goodsAPI from './api/goods';

type State = {
  goods: Good[];
};

class App extends React.PureComponent<{}, State> {
  state: State = {
    goods: [],
  };

  displayGoods = async (selected : () => Promise<Good[]>) => {
    const goods = await selected();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">Dynamic list of Goods</h1>
        <div className="app__buttons">
          <button
            type="button"
            className="app__button"
            onClick={() => (
              this.displayGoods(goodsAPI.getAll)
            )}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="app__button"
            onClick={() => (
              this.displayGoods(goodsAPI.get5First)
            )}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="app__button"
            onClick={() => (
              this.displayGoods(goodsAPI.getRedGoods)
            )}
          >
            Load red goods
          </button>
        </div>
        <Goodslist goods={goods} />
      </div>
    );
  }
}

export default App;
