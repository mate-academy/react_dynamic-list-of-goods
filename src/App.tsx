import React from 'react';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodList } from './components/GoodList/GoodList';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  handleClick = async (getGoods: () => Promise<Good[]>) => {
    const goods = await getGoods();

    this.setState({ goods });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">Dynamic list of Goods</h1>

        <div className="buttons">
          <button
            type="button"
            onClick={() => this.handleClick(getAll)}
            className="button is-primary"
          >
            showAllGoods
          </button>
          <button
            type="button"
            onClick={() => this.handleClick(get5First)}
            className="button is-primary"
          >
            showFirst5Goods
          </button>
          <button
            type="button"
            onClick={() => this.handleClick(getRed)}
            className="button is-primary"
          >
            showRedGoods
          </button>
        </div>

        <GoodList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
