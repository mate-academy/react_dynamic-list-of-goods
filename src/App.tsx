import React from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[] | [],
  isVisible: boolean,
  errorMessage: string,
  isLoading: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    isVisible: false,
    errorMessage: '',
    isLoading: false,
  };

  loadGoods = async (callback: () => Promise<Good[]>) => {
    this.setState({
      goods: [],
      isLoading: true,
      isVisible: true,
    });

    try {
      const goods = await callback();

      this.setState({ goods: [...goods], isLoading: false });
    } catch (error) {
      this.setState({ errorMessage: 'Goods were not fount', isLoading: false });
    }
  };

  render() {
    const {
      goods,
      errorMessage,
      isLoading,
      isVisible,
    } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">
          Dynamic list of Goods
        </h1>

        {isVisible && <GoodsList goods={goods} isLoading={isLoading} />}

        <div className="app__buttons">
          <button
            className="app__button"
            type="button"
            onClick={() => this.loadGoods(getAll)}
          >
            Load All goods
          </button>

          <button
            className="app__button"
            type="button"
            onClick={() => this.loadGoods(get5First)}
          >
            Load 5 first goods
          </button>

          <button
            className="app__button"
            type="button"
            onClick={() => this.loadGoods(getRedGoods)}
          >
            Load red goods
          </button>
        </div>

        {!!errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  }
}

export default App;
