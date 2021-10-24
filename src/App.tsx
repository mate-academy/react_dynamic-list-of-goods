import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

interface State {
  goods: Good[] | [];
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  buttonHandler = (callback: { (): Promise<Good[]>; (): Promise<Good[]>; }) => {
    return callback().then((goods: Good[]) => {
      this.setState({ goods });
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.buttonHandler(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => this.buttonHandler(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.buttonHandler(getRedGoods)}
        >
          Load red goods
        </button>
        <GoodsList
          goodsList={goods}
        />
      </>
    );
  }
}

export default App;
