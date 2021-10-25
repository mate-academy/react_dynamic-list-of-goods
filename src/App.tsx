import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import {ListGoods} from "./component/ListGoods/ListGoods";

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  handleGoods = async (typeOfList: () => Promise<Good[]>) => {
    const goods = await typeOfList();

    this.setState({ goods });
  };

  render() {
    const { handleGoods } = this;
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => handleGoods(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => handleGoods(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => handleGoods(getRedGoods)}
        >
          Load red goods
        </button>
        <ListGoods goods={goods} />
      </>
    );
  }
}

export default App;
