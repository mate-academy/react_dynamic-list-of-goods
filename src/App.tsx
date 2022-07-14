import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { GoodsList } from './Components/GoodsList/GoodsList';

type State = {
  goods: Good[] | null,
};

class App extends React.Component<{}, State> {
  state = {
    goods: null,
  };

  getData = (func: () => Promise<Good[]>) => {
    try {
      func().then(result => this.setState({ goods: result }));
    } catch {
      throw Error('error');
    }
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <div className="buttons">
          Load:
          <button
            type="button"
            className="button"
            onClick={() => {
              this.getData(getAll);
            }}
          >
            All goods
          </button>

          <button
            type="button"
            className="button"
            onClick={() => {
              this.getData(get5First);
            }}
          >
            5 first goods
          </button>

          <button
            type="button"
            className="button"
            onClick={() => {
              this.getData(getRedGoods);
            }}
          >
            Red goods
          </button>
        </div>

        {goods && <GoodsList goods={goods} />}
      </>
    );
  }
}

export default App;
