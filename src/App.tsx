/* eslint-disable no-console */
import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

type State = {
  goods: Good[];
  isLoading: boolean;
  loadingErr: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    isLoading: false,
    loadingErr: false,
  };

  loadGoods = async (request: () => Promise<Good[]>) => {
    this.setState({
      goods: [],
      loadingErr: false,
      isLoading: true,
    });

    try {
      const goods = await request();

      this.setState({
        goods,
      });
    } catch (error) {
      this.setState({ loadingErr: true });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render(): React.ReactNode {
    const { goods, loadingErr, isLoading } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Dynamic list of Goods</h1>
        <div className="App__buttons">
          <button type="button" onClick={() => this.loadGoods(getAll)}>
            Load All goods
          </button>
          <button type="button" onClick={() => this.loadGoods(get5First)}>
            Load 5 first goods
          </button>
          <button type="button" onClick={() => this.loadGoods(getRedGoods)}>
            Load red goods
          </button>
          {console.log(this.state.goods)}
        </div>
        <div className="App__content">
          {isLoading && (
            <div className="App__content-loading">Loading... Please, wait</div>
          )}
          {goods.length !== 0 && (
            <GoodsList goods={this.state.goods} />
          )}
          {loadingErr && (
            <div className="App__content-error">Sorry... We have some error with loading list</div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
