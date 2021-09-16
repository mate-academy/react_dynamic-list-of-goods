import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodList';

interface State{
  goods: Good[];
}

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
      <>
        <h1 className="text-center mb-3">Dynamic list of Goods</h1>
        <div className="d-flex text-center gap-3 justify-content-center mb-3">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.loadGoods(getAll)}
          >
            Load All goods
          </button>

          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.loadGoods(get5First)}
          >
            Load 5 first goods
          </button>

          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.loadGoods(getRedGoods)}
          >
            Load red goods
          </button>
        </div>
        <GoodsList goods={goods} />
      </>
    );
  }
}
