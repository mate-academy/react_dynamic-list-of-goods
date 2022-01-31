import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

type Props = {};
type State = {
  goods: Good[],
};

class App extends React.Component<Props, State> {
  state: State = {
    goods: [],
  };

  setGoods = (callback: () => Promise<Good[]>) => {
    callback()
      .then(goods => this.setState({ goods }));
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button type="button" onClick={() => this.setGoods(getAll)}>
          Load All goods
        </button>

        <button type="button" onClick={() => this.setGoods(get5First)}>
          Load 5 first goods
        </button>

        <button type="button" onClick={() => this.setGoods(getRedGoods)}>
          Load red goods
        </button>

        <ul>
          {goods.map(good => (
            <li
              key={good.id}
              style={{ color: good.color }}
            >
              {good.name}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
