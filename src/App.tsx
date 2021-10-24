import React from 'react';
import './App.scss';

import { GoodsList } from './Components/GoodsList';
import { loadAll, load5, loadRed } from './api/goods';

interface State {
  goods: Good[],
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  loadGoods = async (loader: () => Promise<Good[]>) => {
    const goods = await loader();
    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <div className="buttons">
          <button
            type="button"
            onClick={() => this.loadGoods(loadAll)}
          >
            Load All goods
          </button>
          <button
            type="button"
            onClick={() => this.loadGoods(load5)}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            onClick={() => this.loadGoods(loadRed)}
          >
            Load red goods
          </button>
        </div>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;
