import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[],
};

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
      <div className="App">
        <h1 className="title">Dynamic list of Goods</h1>
        <GoodsList goods={goods} />
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => (
              this.loadGoods(getAll)
            )}
          >
            Show all goods
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => (
              this.loadGoods(get5First)
            )}
          >
            Show first five goods
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => (
              this.loadGoods(getRedGoods)
            )}
          >
            Show red goods
          </button>
        </div>
      </div>
    );
  }
}

export default App;
