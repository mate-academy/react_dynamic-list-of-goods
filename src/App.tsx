import React from 'react';
import './App.scss';
import { Good } from './types/type';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

type State = {
  goods: Good[];
  isLoading: boolean;
  loadingError: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    isLoading: false,
    loadingError: false,
  };

  loadData = async (getGoods: () => Promise<Good[]>) => {
    this.setState({
      isLoading: true,
      loadingError: false,
    });

    try {
      const goods = await getGoods();

      this.setState({
        goods,
        isLoading: false,
      });
    } catch {
      this.setState({
        loadingError: true,
        isLoading: false,
      });
    }
  };

  render() {
    const { isLoading, goods, loadingError } = this.state;

    return (
      <div className="goods">
        <div className="goods__container">
          {loadingError && 'Sorry, problem is here'}
          {!loadingError && (isLoading ? 'Sorry, brother lagi(9' : <GoodsList goods={goods} />)}
          <div className="goods__buttons">
            <button
              className="goods__button"
              type="button"
              onClick={() => this.loadData(getAll)}
            >
              Load All goods
            </button>

            <button
              className="goods__button"
              type="button"
              onClick={() => this.loadData(get5First)}
            >
              Load5First
            </button>

            <button
              className="goods__button"
              type="button"
              onClick={() => this.loadData(getRedGoods)}
            >
              Load read goods
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
