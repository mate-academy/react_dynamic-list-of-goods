import React from 'react';
import './App.scss';

import { get5First, getAll, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  getNeededGoods = async (type: () => Promise<Good[]>) => {
    const goods = await type();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => {
            this.getNeededGoods(getAll);
          }}
        >
          Show All
        </button>
        <button
          type="button"
          onClick={() => {
            this.getNeededGoods(get5First);
          }}
        >
          Show 5
        </button>
        <button
          type="button"
          onClick={() => {
            this.getNeededGoods(getRedGoods);
          }}
        >
          Show red
        </button>
        <ul>{goods
          .map(good => 
            <li 
              key={good.id}
              style={{ color: good.color }}
            >
              {good.name}
            </li>)}
          </ul>
      </>
    );
  }
}

export default App;
