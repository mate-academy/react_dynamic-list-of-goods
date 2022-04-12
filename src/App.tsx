import React from 'react';
import './App.scss';

import {
  get5First,
  getAll,
  getRedGoods,
} from './api/goods';
import { GoodsList } from './components/GoodsList';

interface State {
  goods: Good[],
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  buttonHandler = async (callback: () => Promise<Good[]>) => {
    const goods = await callback();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          className="button"
          onClick={() => this.buttonHandler(getAll)}
        >
          Print all
        </button>

        <button
          type="button"
          className="button"
          onClick={() => this.buttonHandler(get5First)}
        >
          Print first 5
        </button>

        <button
          type="button"
          className="button"
          onClick={() => this.buttonHandler(getRedGoods)}
        >
          Print red
        </button>

        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;
