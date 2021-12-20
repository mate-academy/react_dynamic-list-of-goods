import React from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[] | [];
  isLoading: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    isLoading: false,
  };

  loadData = async (getGoods: () => Promise<Good[]>) => {
    this.setState({
      isLoading: true,
    });

    try {
      const goods = await getGoods();

      this.setState({
        goods,
        isLoading: false,
      });
    } catch {
      this.setState({
        isLoading: false,
      });
    }
  };

  render() {
    const { goods, isLoading } = this.state;

    return (
      <div className="App">
        <div className="App__content">
          <h1 className="title">
            Dynamic list of Goods
          </h1>
          <div className="App__buttons">
            <button
              type="button"
              className="button"
              onClick={() => this.loadData(getAll)}
            >
              Load All goods
            </button>

            <button
              type="button"
              className="button"
              onClick={() => this.loadData(get5First)}
            >
              Load 5 first goods
            </button>
            <button
              type="button"
              className="button"
              onClick={() => this.loadData(getRedGoods)}
            >
              Load red goods
            </button>
          </div>

          <div className="App__goodsList">
            {!isLoading && <GoodsList goods={goods} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
