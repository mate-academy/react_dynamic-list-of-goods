import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
import { API_URL } from './utils/constants';
import { getGoods } from './utils/api';
import './App.css';

interface State {
  goods: Good[];
  isLoaded: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    isLoaded: false,
  };

  loadAll = () => {
    getGoods(API_URL)
      .then(goods => {
        this.setState({
          goods,
          isLoaded: true,
        });
      });
  };

  load5Goods = () => {
    getGoods(API_URL)
      .then(goods => {
        const fiveGoods = [...goods]
          .sort((a, b) => a.name.localeCompare(b.name));

        fiveGoods.length = 5;
        this.setState({
          goods: fiveGoods,
          isLoaded: true,
        });
      });
  };

  loadRedGoods = () => {
    getGoods(API_URL)
      .then(goods => {
        const redGoods = goods
          .filter((good: Good) => good.color === 'red');

        this.setState({
          goods: redGoods,
          isLoaded: true,
        });
      });
  };

  render() {
    const { goods, isLoaded } = this.state;

    return (
      <div>
        <h1>Goods</h1>
        <button
          type="button"
          onClick={this.loadAll}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.load5Goods}
        >
          Load 5 first
        </button>
        <button
          type="button"
          onClick={this.loadRedGoods}
        >
          Load red goods
        </button>
        {isLoaded
          ? (
            <>
              <GoodsList goods={goods} />
            </>
          )
          : (
            <p>no loaded goods</p>
          )}
      </div>
    );
  }
}

export default App;
