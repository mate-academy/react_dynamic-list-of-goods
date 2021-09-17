import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[];
  goodsRed: Good[];
  goods5: Good[];
  getAllGoods: boolean;
  getAllRed: boolean;
  get5: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    goodsRed: [],
    goods5: [],
    getAllGoods: false,
    getAllRed: false,
    get5: false,
  };

  async componentDidMount() {
    const goods = await getAll();
    const goodsRed = await getRedGoods();
    const goods5 = await get5First();

    this.setState({ goods, goodsRed, goods5 });
  }

  handleAllGoods = () => {
    this.setState({
      getAllGoods: true,
      getAllRed: false,
      get5: false,
    });
  };

  handle5Goods = () => {
    this.setState({
      getAllGoods: false,
      getAllRed: false,
      get5: true,
    });
  };

  handleRedGoods = () => {
    this.setState({
      getAllGoods: false,
      getAllRed: true,
      get5: false,
    });
  };

  render() {
    const {
      goods, get5, getAllGoods, getAllRed,
    } = this.state;

    return (
      <div className="card">
        <h1>Dynamic list of Goods</h1>

        <GoodsList
          goods={goods}
          goodsRed={this.state.goodsRed}
          goods5={this.state.goods5}
          getAllGoods={getAllGoods}
          getAllRed={getAllRed}
          get5={get5}
        />

        <div className="button-container">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleAllGoods}
          >
            Load All goods
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handle5Goods}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleRedGoods}
          >
            Load red goods
          </button>
        </div>

      </div>
    );
  }
}

export default App;
