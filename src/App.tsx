import React from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[];
  isLoading: boolean;
  errorMessage: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    isLoading: false,
    errorMessage: '',
  };

  loadData = async (getData: () => Promise<Good[]>) => {
    this.setState({
      isLoading: true,
    });

    try {
      const goods = await getData();

      this.setState({
        goods,
        isLoading: false,
      });
    } catch {
      this.setState({
        isLoading: false,
        errorMessage: 'Cannot find goods',
      });
    }
  };

  render() {
    const { goods, isLoading, errorMessage } = this.state;

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
            {!isLoading && (<GoodsList goods={goods} />)}
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
