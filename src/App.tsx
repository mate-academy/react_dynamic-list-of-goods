import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { ListOfGoods } from './components/ListOfGoods';
import { Product } from './types/Product';

type State = {
  goods: Product[];
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

  render() {
    const {
      goods,
      loadingErr,
      isLoading,
    } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Dynamic List of Goods</h1>

        <div className="App__wrapper">
          <button
            type="button"
            onClick={() => this.loadGoods(getAll)}
            className="App__button App__button--all"
          >
            Get all the goods
          </button>

          <button
            type="button"
            onClick={() => this.loadGoods(get5First)}
            className="App__button App__button--5first"
          >
            Get 5 first products
          </button>

          <button
            type="button"
            onClick={() => this.loadGoods(getRedGoods)}
            className="App__button App__button--red"
          >
            Get red goods
          </button>
        </div>

        <div className="App__goodsList">
          {isLoading && (
            <div className="App__goodsList--loading">Loading...</div>
          )}

          {goods.length !== 0 && (
            <ListOfGoods goods={this.state.goods} />
          )}

          {loadingErr && (
            <div className="App__goodsList--error">Loading error</div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
