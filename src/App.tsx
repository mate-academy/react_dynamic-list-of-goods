import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { getGoods } from './api/api';

interface State {
  goods: Good[];
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadGoods = () => {
    getGoods().then(goods => this.setState({
      goods,
    }));
  };

  loadFiveGoods = () => {
    getGoods().then(goods => this.setState({
      goods: goods.sort((a: Good, b: Good) => a.name.localeCompare(b.name))
        .slice(0, 5),
    }));
  };

  loadRedGoods = () => {
    getGoods().then(goods => this.setState({
      goods: goods.filter((good: Good) => good.color === 'red'),
    }));
  };

  render() {
    const {
      goods,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          onClick={this.loadGoods}
        >
          Load goods
        </button>

        <button
          type="button"
          onClick={this.loadFiveGoods}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={this.loadRedGoods}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
