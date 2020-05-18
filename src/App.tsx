import React from 'react';
import './App.css';

import { getGoods } from './helpers/api';

type AppState = {
  goods: Good[];
};

class App extends React.Component<{}, AppState> {
  state = {
    goods: [],
  };

  loadAllGoods = async () => {
    const goodsFromServer = await getGoods();

    this.setState({ goods: goodsFromServer });
  };

  loadFirstFve = async () => {
    const goodsFromServer = await getGoods();

    this.setState({ goods: goodsFromServer.slice(0, 5) });
  };

  loadRed = async () => {
    const goodsFromServer = await getGoods();

    this.setState({ goods: goodsFromServer.filter((good: Good) => good.color === 'red') });
  };

  render() {
    return (
      <>
        {this.state.goods.length > 0
          ? (
            <>
              <div>
                <button
                  type="button"
                  onClick={this.loadAllGoods}
                >
                  Load All Goods
                </button>
                <button
                  type="button"
                  onClick={this.loadFirstFve}
                >
                  Load 5 first Goods
                </button>
                <button
                  type="button"
                  onClick={this.loadRed}
                >
                  Load Red Goods
                </button>
              </div>
              <ul>
                {this.state.goods.map((good: Good) => (
                  <li key={good.id} style={{ color: `${good.color}` }}>{good.name}</li>
                ))}
              </ul>
            </>
          )
          : (
            <button
              type="button"
              onClick={this.loadAllGoods}
            >
              Load goods
            </button>
          )}
      </>

    );
  }
}

export default App;
