import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    goods: [] as any[],
  };

  loadAllGoods = async () => {
    const goods = await getAll();

    this.setState({ goods });
  };

  load5FirstGoods = async () => {
    const goods = await get5First();

    this.setState({ goods });
  };

  loadRedGoods = async () => {
    const goods = await getRedGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="goods">
        <h1 className="goods__title">Dynamic list of Goods</h1>
        <form className="goods__form">
          <button
            type="button"
            className="goods__button"
            onClick={this.loadAllGoods}
          >
            Load all goods
          </button>
          <button
            type="button"
            className="goods__button"
            onClick={this.load5FirstGoods}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="goods__button"
            onClick={this.loadRedGoods}
          >
            Load red goods
          </button>
        </form>

        {goods && <GoodsList preparedGoods={goods} />}
      </div>
    );
  }
}

export default App;
