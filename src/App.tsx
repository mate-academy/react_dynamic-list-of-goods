import React from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[],
  loadingGoods: boolean,
  errorMessage: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    loadingGoods: false,
    errorMessage: '',
  };

  loadingData = async (func: () => Promise<Good[]>) => {
    try {
      const goods = await func();

      this.setState({ goods, errorMessage: '' });
    } catch (error) {
      this.setState({
        errorMessage: 'Nah... Doesn\'t work',
      });
    }
  };

  render() {
    const { goods, loadingGoods } = this.state;

    return (
      <div className="App">
        <div className="App__container">
          <h1 className="App__title">
            Dynamic list of goods
          </h1>
          <div className="App__buttons">
            <button
              className="App__button"
              type="button"
              onClick={() => this.loadingData(getAll)}
            >
              Load all goods
            </button>
            <button
              className="App__button"
              type="button"
              onClick={() => this.loadingData(get5First)}
            >
              Load 5 first goods
            </button>
            <button
              className="App__button"
              type="button"
              onClick={() => this.loadingData(getRedGoods)}
            >
              Load red goods
            </button>
          </div>

          <div className="App__goods">
            {!loadingGoods && <GoodsList goods={goods} />}
          </div>
          <div className="App__error">
            {this.state.errorMessage}
          </div>
        </div>
      </div>
    );
  }
}
