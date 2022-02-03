import React from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList';
import * as goodsAPI from './api/goods';

type Props = {};
type State = {
  goods: Good[],
};

export class App extends React.PureComponent<Props, State> {
  state: State = {
    goods: [],
  };

  componentDidMount() {
    this.getGoodsHandler(goodsAPI.getAll());
  }

  getGoodsHandler = async (getGoods: Promise<Good[]>) => {
    const goods = await getGoods;

    this.setState({
      goods: [...goods],
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => (
            this.getGoodsHandler(goodsAPI.getAll())
          )}
        >
          Get all
        </button>
        <button
          type="button"
          onClick={() => (
            this.getGoodsHandler(goodsAPI.getFirstFive())
          )}
        >
          Get 5
        </button>
        <button
          type="button"
          onClick={() => (
            this.getGoodsHandler(goodsAPI.getRedGoods())
          )}
        >
          Get red goods
        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}
