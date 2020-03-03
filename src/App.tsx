import React, { Component } from 'react';
import './App.css';
import { getGoods } from './Api';
import { GoodsList } from './components/GoodsList';

interface AppState {
  goodsList: Goods;
  isLoaded: boolean;
}

class App extends Component<{}, AppState> {
  state = {
    goodsList: [],
    isLoaded: false,
  };

  loadGoods = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget.dataset;

    switch (name) {
      case 'All':
        getGoods()
          .then(goods => {
            this.setState({
              goodsList: goods,
              isLoaded: true,
            });
          });

        break;

      case 'FirstFive':
        getGoods()
          .then(goods => {
            this.setState({
              goodsList: goods
                .sort((a, b) => a.name.localeCompare(b.name))
                .slice(0, 5),
              isLoaded: true,
            });
          });

        break;

      case 'Red':
        getGoods()
          .then(goods => {
            this.setState({
              goodsList: goods.filter(good => good.color === 'red'),
              isLoaded: true,
            });
          });

        break;

      default:
        break;
    }
  };

  render() {
    const { goodsList, isLoaded } = this.state;

    return (
      <div className="App">
        <button
          className="button"
          type="button"
          data-name="All"
          onClick={this.loadGoods}
        >
          Load All Goods
        </button>
        <button
          className="button"
          type="button"
          data-name="FirstFive"
          onClick={this.loadGoods}
        >
          Load 5 first goods
        </button>
        <button
          className="button"
          type="button"
          data-name="Red"
          onClick={this.loadGoods}
        >
          Load red goods
        </button>
        {isLoaded && <GoodsList list={goodsList} />}
      </div>
    );
  }
}

export default App;
