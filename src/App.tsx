import React, { Component } from 'react';

import './App.css';
import { getGoodsList } from './helpers/api';
import GoodsList from './components/GoodsList';

type State = {
  goodsList: GoodsItem[];
  isLoading: boolean;
};

class App extends Component<{}, State> {
  state = {
    goodsList: [],
    isLoading: false,
  };

  componentDidMount() {
    const goodsListPromise = getGoodsList();

    goodsListPromise.then((goodsList) => {
      this.setState({ goodsList });
    });
  }

  handleShowAllGoods = () => {
    this.setState({ isLoading: true });

    setTimeout(() => {
      getGoodsList()
        .then((goodsList) => {
          this.setState({
            goodsList,
            isLoading: false,
          });
        });
    }, 500);
  };

  handleShowFirstGoods = (num: number) => {
    this.setState({ isLoading: true });

    setTimeout(() => {
      getGoodsList()
        .then((goodsList) => {
          this.setState({
            goodsList: goodsList.slice(0, num - 1),
            isLoading: false,
          });
        });
    }, 500);
  };

  handleShowColorGoods = (color: string) => {
    this.setState({ isLoading: true });

    setTimeout(() => {
      getGoodsList()
        .then((goodsList) => {
          this.setState({
            goodsList: goodsList
              .filter((goodsItem: GoodsItem) => goodsItem.color === color),
            isLoading: false,
          });
        });
    }, 500);
  };

  render() {
    const { goodsList, isLoading } = this.state;

    return (
      <div>
        {!isLoading && <GoodsList goodsList={goodsList} />}
        {isLoading && (
          <div>
            Loading...
          </div>
        )}
        <button
          type="button"
          onClick={this.handleShowAllGoods}
        >
          Load All Goods
        </button>
        <button
          type="button"
          onClick={() => this.handleShowFirstGoods(5)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.handleShowColorGoods('red')}
        >
          Load red goods
        </button>
      </div>
    );
  }
}

export default App;
