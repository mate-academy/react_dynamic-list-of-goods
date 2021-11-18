import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
// or
// import * as goodsAPI from './api/goods';

interface State {
  goods: Good[]
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  handleChange = async (callback: () => Promise<Good[]>) => {
    callback()
      .then((goods) => this.setState({ goods }));
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <div className="App__button">
          <button
            type="submit"
            onClick={() => this.handleChange(getAll)}
          >
            Load All goods
          </button>
          <button
            type="submit"
            onClick={() => this.handleChange(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            type="submit"
            onClick={() => this.handleChange(getRedGoods)}
          >
            Load red goods
          </button>
          {goods.length > 0
          && <GoodsList goods={goods} />}
        </div>
      </div>
    );
  }
}

export default App;
