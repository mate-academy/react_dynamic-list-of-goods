import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

interface State {
  goods: Good[];
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadGoods = async (getGoods: () => Promise<Good[]>) => {
    const goods = await getGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <GoodsList goods={goods} />
        <button
          type="submit"
          onClick={() => (this.loadGoods(getAll))}
        >
          Load All goods
        </button>
        <button
          type="submit"
          onClick={() => (this.loadGoods(get5First))}
        >
          Load 5 first goods
        </button>
        <button
          type="submit"
          onClick={() => (this.loadGoods(getRedGoods))}
        >
          Load red goods
        </button>
      </>
    );
  }
}
export default App;
