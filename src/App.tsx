import React from 'react';
import './App.css';

import { getGoods } from './api';
import { GoodsList } from './components/GoodList/Goodlist';

interface State {
  goods: Good[];
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  handleAllGoods = () => {
    getGoods()
      .then(goods => {
        this.setState({
          goods,
        });
      });
  };

  handleClickFive = () => {
    getGoods()
      .then(goods => {
        this.setState({
          goods: goods
            .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
            .slice(0, 5),
        });
      });
  };

  handleRedGoods = () => {
    getGoods()
      .then(goods => {
        this.setState({
          goods: goods.filter((good: Good) => good.color === 'red'),
        });
      });
  };

  render() {
    const {
      goods,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <div className="wrapper">
          <button
            type="button"
            className="button"
            onClick={this.handleAllGoods}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="button"
            onClick={this.handleClickFive}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="button"
            onClick={this.handleRedGoods}
          >
            Load red goods
          </button>
        </div>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
