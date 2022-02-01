import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[],
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  handleGoods = async (getGoods: () => Promise<Good[]>) => {
    const goods = await getGoods();

    this.setState({
      goods,
    });
  };

  render(): React.ReactNode {
    const { goods } = this.state;

    return (
      <div className="app box">
        <h1 className="app__title title is-4">Dynamic list of Goods</h1>

        <section className="buttonsPanel">
          <button
            type="button"
            className="button is-small"
            onClick={() => this.handleGoods(getAll)}
          >
            Load all
          </button>

          <button
            type="button"
            className="button is-small"
            onClick={() => this.handleGoods(get5First)}
          >
            Load first 5
          </button>

          <button
            type="button"
            className="button is-small"
            onClick={() => this.handleGoods(getRedGoods)}
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
