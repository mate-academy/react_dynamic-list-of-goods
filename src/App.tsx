import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

type State = {
  goods: Good[],
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  async showAll() {
    const goods = await getAll();

    this.setState({
      goods,
    });
  }

  async showFiveFirst() {
    const goods = await get5First();

    this.setState({
      goods,
    });
  }

  async showRed() {
    const goods = await getRedGoods();

    this.setState({
      goods,
    });
  }

  render(): React.ReactNode {
    const { goods } = this.state;

    return (
      <div className="app box">
        <h1 className="app__title title is-4">Dynamic list of Goods</h1>

        <section className="buttonsPanel">
          <button
            type="button"
            className="button is-small"
            onClick={() => this.showAll()}
          >
            Load all
          </button>

          <button
            type="button"
            className="button is-small"
            onClick={() => this.showFiveFirst()}
          >
            Load first 5
          </button>

          <button
            type="button"
            className="button is-small"
            onClick={() => this.showRed()}
          >
            Load red
          </button>
        </section>

        {goods.length > 0 && (
          <GoodsList goods={goods} />
        )}
      </div>
    );
  }
}

export default App;
