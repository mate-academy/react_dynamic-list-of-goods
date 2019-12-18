import React from 'react';
import './App.css';
import GoodsList from './GoodsList';

import { getGoods } from './api';

class App extends React.Component {
  state = {
    goods: {
      goodsAll: [],
      goodsFive: [],
      goodsRed: [],
    },
  }

  setGoods = async(event) => {
    const button = event.target.textContent;
    const goods = await getGoods();

    switch (button) {
      case 'Load 5 first goods':
        return this.setState(state => ({
          goods: {
            goodsAll: state.goods.goodsAll,
            goodsFive: goods.sort((a, b) => (
              a.name.localeCompare(b.name)
            )).slice(0, 5),
            goodsRed: state.goods.goodsRed,
          },
        }));
      case 'Load red goods':
        return this.setState(state => ({
          goods: {
            goodsAll: state.goods.goodsAll,
            goodsFive: state.goods.goodsFive,
            goodsRed: goods.filter(good => good.color === 'red'),
          },
        }));
      default:
        return this.setState(state => ({
          goods: {
            goodsAll: goods,
            goodsFive: state.goods.goodsFive,
            goodsRed: state.goods.goodsRed,
          },
        }));
    }
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <GoodsList
          goodsList={goods}
          handlerGoods={this.setGoods}
        />
      </div>
    );
  }
}

export default App;
