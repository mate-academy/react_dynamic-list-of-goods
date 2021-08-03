import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './components/GoodsList';

export class App extends React.Component {
    state = {
      currentGoods: [],
    }

    goodsHandler = async(callback) => {
      this.setState({
        currentGoods: await callback(),
      });
    }

    render() {
      const { currentGoods } = this.state;

      return (
        <div>
          <h1>Dynamic list of Goods</h1>
          <div>
            <button
              type="button"
              onClick={() => this.goodsHandler(getAll)}
            >
              Load All goods
            </button>
            <button
              type="button"
              onClick={() => this.goodsHandler(get5First)}
            >
              Load 5 first goods
            </button>
            <button
              type="button"
              onClick={() => this.goodsHandler(getRedGoods)}
            >
              Load red goods
            </button>
          </div>

          <GoodsList
            currentGoods={currentGoods}
          />
        </div>
      );
    }
}
