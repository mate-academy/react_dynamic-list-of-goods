import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[],
  listIsVisible: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    listIsVisible: false,
  };

  loadGoodsFromServer = async (getServerData: () => Promise<Good[]>) => {
    const goods = await getServerData();

    this.setState({ goods, listIsVisible: true });
  };

  render() {
    const { goods, listIsVisible } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button type="submit" onClick={() => this.loadGoodsFromServer(getAll)}>
          Load All goods
        </button>
        <button type="submit" onClick={() => this.loadGoodsFromServer(get5First)}>
          Load 5 first goods
        </button>
        <button type="submit" onClick={() => this.loadGoodsFromServer(getRedGoods)}>
          Load red goods
        </button>
        {listIsVisible && <GoodsList goods={goods} />}
      </>
    );
  }
}

export default App;
