import React from 'react';
import './App.scss';
import { GoodsList } from './Components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[],
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  handleClick = async (getGoods: Promise<Good[]>) => {
    const good = await getGoods;

    this.setState({ goods: good });
  };

  render() {
    return (
      <div className="container">
        <h1>Dynamic list of Goods</h1>
        <div>
          <button
            type="button"
            className="btn"
            onClick={() => this.handleClick(getAll())}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => this.handleClick(get5First())}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => this.handleClick(getRedGoods())}
          >
            Load red goods
          </button>
        </div>
        <GoodsList goodsList={this.state.goods} />
      </div>
    );
  }
}

export default App;
