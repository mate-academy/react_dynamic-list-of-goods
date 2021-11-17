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

  handleButtonClick = async (callback: Promise<Good[]>) => {
    const goods = await callback;

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
            onClick={() => this.handleButtonClick(getAll())}
          >
            Load all goods
          </button>

          <button
            type="button"
            className="button"
            onClick={() => this.handleButtonClick(get5First())}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            className="button"
            onClick={() => this.handleButtonClick(getRedGoods())}
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
