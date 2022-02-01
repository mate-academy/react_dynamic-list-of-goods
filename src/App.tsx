import React from 'react';
import { GoodsList } from './components/GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  handleClick = (getGoods: () => Promise<Good[]>) => {
    getGoods()
      .then(goods => (
        this.setState({
          goods,
        })
      ));
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="title">Dynamic list of Goods</h1>
        <div className="buttons">
          <button
            type="button"
            className="button"
            onClick={() => this.handleClick(getAll)}
          >
            Load All goods
          </button>

          <button
            type="button"
            className="button"
            onClick={() => this.handleClick(get5First)}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            className="button"
            onClick={() => this.handleClick(getRedGoods)}
          >
            Load red goods
          </button>
        </div>

        {goods.length > 0 && (
          <GoodsList goods={goods} />
        )}
      </div>
    );
  }
}

export default App;
