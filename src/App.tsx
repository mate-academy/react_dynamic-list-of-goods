import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

type State = {
  goods: Good[];
};
export class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  loadGoods = async (getGoods: () => Promise<Good[]>) => {
    const goods = await getGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="h1 text-center">Dynamic list of Goods</h1>
        <GoodsList goods={goods} />
        <div className="btn-group d-flex justify-content-center mt-3" role="group">
          <button
            type="button"
            className="btn btn-primary mr-3"
            onClick={() => (
              this.loadGoods(getAll)
            )}
          >
            Show all goods
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => (
              this.loadGoods(get5First)
            )}
          >
            Show first five goods
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => (
              this.loadGoods(getRedGoods)
            )}
          >
            Show red goods
          </button>
        </div>
      </div>
    );
  }
}
