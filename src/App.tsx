import React, { Component } from 'react';
import './App.css';
import { Good } from './Types';
import { GoodsList } from './GoodList';
import { FilterButtons } from './FilterButtons';
import { response } from './Api/api';

interface ResponseData<D> {
  data: D;
}

interface State {
  goods: Good[];
}

type GoodsData = ResponseData<Good[]>;

class App extends Component<{}, State> {
  state: State = {
    goods: [],
  };

  getAllGoods = async () => {
    const allGoods: GoodsData = await response();
    const { data } = allGoods;

    this.setState({
      goods: data,
    });
  };

  getFirstFiveGoods = async () => {
    const allGoods: GoodsData = await response();
    const { data } = allGoods;

    this.setState({
      goods: data.slice(0, 5),
    });
  };

  getRedGoods = async () => {
    const allGoods: GoodsData = await response();
    const { data } = allGoods;

    this.setState({
      goods: data.filter(good => good.color === 'red'),
    });
  };

  render() {
    const { goods } = this.state;
    const { getAllGoods, getFirstFiveGoods, getRedGoods } = this;

    return (
      <div className="list">
        <h1>
          Dynamic list of Goods
        </h1>
        <FilterButtons onAll={getAllGoods} onFive={getFirstFiveGoods} onRed={getRedGoods} />
        <GoodsList goods={goods} />
      </div>

    );
  }
}

export default App;
