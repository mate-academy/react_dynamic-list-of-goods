import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

interface State {
  goods: Good[],
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  loadGoods = async (loader: () => Promise<Good[]>) => {
    const good = await loader();

    this.setState({ goods: good });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <div>
          <button
            type="button"
            className="button"
            onClick={() => this.loadGoods(getAll)}
          >
            Load all goods
          </button>

          <button
            type="button"
            className="button"
            onClick={() => this.loadGoods(get5First)}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            className="button"
            onClick={() => this.loadGoods(getRedGoods)}
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
