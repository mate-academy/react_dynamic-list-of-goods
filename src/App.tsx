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

  componentDidMount() {
    getGoodsList().then((goodsList) => {
      this.setState({ goodsList });
    });
  }

  handleLoadAllGoods = () => {
    getGoodsList().then((goodsList) => {
      this.setState({ goodsList });
    });
  };

  handleLoadSomeGoods = (number: number) => {
    getGoodsList().then((goodsList) => {
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
      <div>
        <GoodsList goodsList={goodsList} />
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
    );
  }
}
