import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './react-app-env';
import { GoodsList } from './components/GoodsList';

type State = {
  goods: Good[];
  isLoading: boolean;
  loadingError: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
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
    const { goods, isLoading, loadingError } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={() => {
            this.loadData(getAll);
          }}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => {
            this.loadData(get5First);
          }}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => {
            this.loadData(getRedGoods);
          }}
        >
          Load red goods
        </button>

        {loadingError && <p>Loading error</p>}

        {isLoading ? <p>Loading...</p> : <GoodsList goods={goods} />}
      </div>
    );
  }
}

export default App;
