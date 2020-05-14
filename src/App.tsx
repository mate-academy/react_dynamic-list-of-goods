import React from 'react';
import './App.css';

import { getGoodsList } from './helpers/api';
import { GoodsList } from './components/GoodsList/GoodsList';

type State = {
  goodsList: GoodsItem[];
};

export class App extends React.Component<{}, State> {
  state = {
    goodsList: [],
  };

  handleLoadAllGoods = () => {
    getGoodsList().then((goodsList) => {
      this.setState({ goodsList });
    });
  };

  handleLoadSomeGoods = (number: number) => {
    const sortGoodsList = (goods: GoodsItem[]) => (
      [...goods].sort((a, b) => a.name.localeCompare(b.name)));

    getGoodsList()
      .then(sortGoodsList)
      .then((goodsList) => {
        this.setState({
          goodsList: goodsList.slice(0, number),
        });
      });
  };

  handleLoadGoodsByColor = (color: string) => {
    getGoodsList().then((goodsList) => {
      this.setState({
        goodsList: goodsList.filter((goodsItem: GoodsItem) => goodsItem.color === color),
      });
    });
  };

  render() {
    const { goodsList } = this.state;

    return (
      <div className="goods-list-wrap">
        <div className="goods-list__button-wrap">
          <button
            type="button"
            className="goods-list__button"
            onClick={this.handleLoadAllGoods}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="goods-list__button"
            onClick={() => this.handleLoadSomeGoods(5)}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="goods-list__button"
            onClick={() => this.handleLoadGoodsByColor('red')}
          >
            Load red goods
          </button>
        </div>
        <GoodsList goodsList={goodsList} />
      </div>
    );
  }
}
