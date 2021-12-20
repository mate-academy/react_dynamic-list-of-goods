import React from 'react';
import './App.scss';

import { Product } from './types/Product';
import { getAll, get5First, getRed } from './api/goods';
import { ListOfGoods } from './Components/ListOfGoods';

type State = {
  goods: Product[];
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  setGoods = (method: () => Promise<Good[]>) => {
    method().then(goods => this.setState({ goods }));
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="list">
        <h1 className="list__title">Dynamic List of Goods</h1>

        <button
          type="button"
          onClick={() => this.setGoods(getAll)}
          className="list__button list__button--all"
        >
          Get all the goods
        </button>

        <button
          type="button"
          onClick={() => this.setGoods(get5First)}
          className="list__button list__button--5first"
        >
          Get 5 first products
        </button>

        <button
          type="button"
          onClick={() => this.setGoods(getRed)}
          className="list__button list__button--red"
        >
          Get red goods
        </button>

        <ListOfGoods goods={goods} />
      </div>
    );
  }
}

export default App;
