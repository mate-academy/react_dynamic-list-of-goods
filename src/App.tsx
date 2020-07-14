import React from 'react';
import './App.css';
import { Good } from './components/Good';
import { GoodsList } from './components/GoodsList';
import { getGoods } from './api/getGoods';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  loadAllGoods = () => {
    getGoods()
      .then(goodsFromServer => {
        this.setState({
          goods: goodsFromServer,
        });
      });
  };

  loadFirstFive = () => {
    getGoods()
      .then(goodsFromServer => {
        this.setState({
          goods: goodsFromServer
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0, 5),
        });
      });
  };

  loadRedGoods = () => {
    getGoods()
      .then(goodsFromServer => {
        this.setState({
          goods: goodsFromServer
            .filter((good) => good.color === 'red'),
        });
      });
  };

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={this.loadAllGoods}
        >
          Load all goods
        </button>
        <button
          type="button"
          onClick={this.loadFirstFive}
        >
          Load first 5 goods
        </button>
        <button
          type="button"
          onClick={this.loadRedGoods}
        >
          Load red goods
        </button>
        <GoodsList
          goods={this.state.goods}
        />
      </div>
    );
  }
}

export default App;
