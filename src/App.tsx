import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

interface State {
  goods: Good[]
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  handleChangeButton = async (callback: () => Promise<Good[]>) => {
    const goods = await callback();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="submit"
          onClick={() => this.handleChangeButton(getAll)}
        >
          get all goods
        </button>
        <button
          type="submit"
          onClick={() => this.handleChangeButton(get5First)}
        >
          get first 5
        </button>
        <button
          type="submit"
          onClick={() => this.handleChangeButton(getRedGoods)}
        >
          get red
        </button>
        {goods.length > 0
        && <GoodsList goodsFromServer={goods} />}
      </>
    );
  }
}

export default App;
