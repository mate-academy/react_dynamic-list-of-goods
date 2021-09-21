import React from 'react';
import './App.scss';
import { getRedGoods, get5First, getAll } from './api/goods';
import { GoodsList } from './GoodsList/GoodsList';

type State = {
  goods: Good[],
  showGoods: boolean,
};

export class App extends React.PureComponent<{}, State> {
  state:State = {
    goods: [{
      id: NaN,
      name: '',
      color: '',
    }],
    showGoods: true,
  };

  handleButton = async (goodsFilter: Promise<Good[]>) => {
    try {
      const goods = await goodsFilter;

      this.setState({
        goods,
        showGoods: true,
      });
    } catch (error) {
      this.setState({ showGoods: false });
    }
  };

  render() {
    const { showGoods, goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <div>
          <button
            type="button"
            onClick={() => this.handleButton(getAll())}
          >
            Load All goods
          </button>
          {' '}
          <button
            type="button"
            onClick={() => this.handleButton(get5First())}
          >
            Load 5 first goods
          </button>
          {' '}
          <button
            type="button"
            onClick={() => this.handleButton(getRedGoods())}
          >
            Load red goods
          </button>
        </div>
        {showGoods
          ? (
            <GoodsList
              goods={goods}
            />
          )
          : (
            <div style={{ color: 'red' }}>
              Something went wrong
            </div>
          )}
      </>
    );
  }
}
