import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import GoodsList from './components/GoodsList';

interface State {
  goods?: Good[],
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  handleAllGoodsButton = async () => {
    const goods = await getAll();

    this.setState({ goods });
  };

  handle5FirstButton = async () => {
    const goods = await get5First();

    this.setState({ goods });
  };

  handleGetRedGoods = async () => {
    const goods = await getRedGoods();

    this.setState({ goods });
  };

  render() {
    return (
      <div>
        <h1>Dynamic list of Goods</h1>

        <div className="buttons-container">

          <button
            type="button"
            className="button"
            onClick={this.handleAllGoodsButton}
          >
            Load all goods
          </button>

          <button
            type="button"
            className="button"
            onClick={this.handle5FirstButton}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            className="button"
            onClick={this.handleGetRedGoods}
          >
            Load red goods
          </button>

          <div className="goods-container">
            {GoodsList.length > 0 && (<GoodsList goods={this.state.goods} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
