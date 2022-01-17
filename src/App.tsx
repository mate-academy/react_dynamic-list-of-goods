import React from 'react';
import { getAll, get5First, getRed } from './api/goods';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';
import { LoadingError } from './components/LoadingError/LoadingError';

interface State {
  goods: Good[],
  goodsErrorLoading: boolean,
}

type Good = {
  id: number,
  name: string,
  color: string,
};

export class App extends React.Component<{}, State> {
  state = {
    goods: [],
    goodsErrorLoading: false,
  };

  loadFromServer = async (loadFun: () => Promise<Good[]>) => {
    this.setState({ goodsErrorLoading: false });
    try {
      const goodsFromServer = await loadFun();

      this.setState({ goods: goodsFromServer });
    } catch (error) {
      this.setState({ goodsErrorLoading: true });
    }
  };

  allGoods = () => this.loadFromServer(getAll);

  fiveAscAlphabeticSortGoods = () => this.loadFromServer(get5First);

  redGoods = () => this.loadFromServer(getRed);

  render() {
    const { goods, goodsErrorLoading } = this.state;

    return (
      <div className="App">
        <div className="buttons-container">
          <button
            className="button"
            type="button"
            onClick={this.allGoods}
          >
            Load all goods
          </button>
          <button
            className="button"
            type="button"
            onClick={this.fiveAscAlphabeticSortGoods}
          >
            Load 5 goods
          </button>
          <button
            className="button"
            type="button"
            onClick={this.redGoods}
          >
            Load red goods
          </button>
        </div>
        {goodsErrorLoading && <LoadingError />}
        {goods.length > 0 && <GoodsList goods={goods} />}
      </div>
    );
  }
}
