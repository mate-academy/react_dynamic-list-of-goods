import React from 'react';
import { getAll, get5First, getRed } from './api/goods';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';
import { LoadingError } from './components/LoadingError/LoadingError';

interface State {
  goods: Good[],
  goodsErrorLoading: boolean,
  allGoodsLoader: boolean,
  fiveGoodsLoader: boolean,
  redGoodsLoader: boolean,
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
    allGoodsLoader: false,
    fiveGoodsLoader: false,
    redGoodsLoader: false,
  };

  loadFromServer = async (loadFun: () => Promise<Good[]>) => {
    this.setState({
      goods: [],
      goodsErrorLoading: false,
    });
    try {
      const goodsFromServer = await loadFun();

      this.setState({
        goods: goodsFromServer,
        allGoodsLoader: false,
        fiveGoodsLoader: false,
        redGoodsLoader: false,
      });
    } catch (error) {
      this.setState({
        goodsErrorLoading: true,
        allGoodsLoader: false,
        fiveGoodsLoader: false,
        redGoodsLoader: false,
      });
    }
  };

  allGoods = () => {
    this.setState({
      allGoodsLoader: true,
    });
    this.loadFromServer(getAll);
  };

  fiveAscAlphabeticSortGoods = () => {
    this.setState({
      fiveGoodsLoader: true,
    });
    this.loadFromServer(get5First);
  };

  redGoods = () => {
    this.setState({
      redGoodsLoader: true,
    });
    this.loadFromServer(getRed);
  };

  render() {
    const {
      goods,
      goodsErrorLoading,
      allGoodsLoader,
      fiveGoodsLoader,
      redGoodsLoader,
    } = this.state;

    return (
      <div className="App">
        <div className="buttons-container">
          <button
            className="button"
            type="button"
            onClick={this.allGoods}
          >
            {allGoodsLoader && goods.length === 0 ? (
              <div className="loader">
                {}
              </div>
            ) : ('Load all goods')}
          </button>
          <button
            className="button"
            type="button"
            onClick={this.fiveAscAlphabeticSortGoods}
          >
            {fiveGoodsLoader && goods.length === 0 ? (
              <div className="loader">{}</div>
            ) : ('Load 5 goods')}
          </button>
          <button
            className="button"
            type="button"
            onClick={this.redGoods}
          >
            {redGoodsLoader && goods.length === 0 ? (
              <div className="loader">{}</div>
            ) : ('Load red goods')}
          </button>
        </div>
        {goodsErrorLoading && <LoadingError />}
        {goods.length > 0 && <GoodsList goods={goods} />}
      </div>
    );
  }
}
