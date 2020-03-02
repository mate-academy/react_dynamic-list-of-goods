import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodsList';
import { getGoods } from './api';

class App extends React.Component {
  state = {
    goods: [],
  };

  handleLoad = () => {
    getGoods().then(goods => {
      this.setState({
        goods,
      });
    });
  };

  loadFirstFive = () => {
    getGoods().then(goods => {
      this.setState({
        goods: goods
          .sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name))
          .splice(0, 5),
      });
    });
  };

  loadRed = () => {
    getGoods().then(goods => {
      this.setState({
        goods: goods.filter((good: Good) => good.color === 'red'),
      });
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="app">
        <div className="buttons">
          <button
            type="button"
            className="btn"
            onClick={this.handleLoad}
          >
            Load Goods
          </button>
          <button
            type="button"
            className="btn"
            onClick={this.loadFirstFive}
          >
            Load First Five Goods
          </button>
          <button
            type="button"
            className="btn"
            onClick={this.loadRed}
          >
            Load Red Goods
          </button>
        </div>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
