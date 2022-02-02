import React from 'react';
import './App.scss';
import { GoodList } from './components/GoodList';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  handleButton = async (getGoods: () => Promise<Good[]>) => {
    const goods = await getGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1 className="title">Dynamic list of Goods</h1>
        <div className="field is-grouped">
          <div className="control">
            <button
              type="button"
              className="button is-link"
              onClick={() => this.handleButton(getAll)}
            >
              Load All goods
            </button>
          </div>
          <div className="control">
            <button
              type="button"
              className="button is-link"
              onClick={() => this.handleButton(get5First)}
            >
              Load 5 first goods
            </button>
          </div>
          <div className="control">
            <button
              type="button"
              className="button is-link"
              onClick={() => this.handleButton(getRedGoods)}
            >
              Load red goods
            </button>
          </div>
        </div>
        <GoodList goods={goods} />
      </>
    );
  }
}

export default App;
