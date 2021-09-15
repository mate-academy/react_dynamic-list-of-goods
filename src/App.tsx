import React from 'react';
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { getAll, get5First, getRedGoods } from './api/goods';
import GoodsList from './components/GoodsList';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  setAllGoods = async () => {
    const goods = await getAll();

    this.setState({ goods });
  };

  set5First = async () => {
    const goods = await get5First();

    this.setState({ goods });
  };

  setRedGoods = async () => {
    const goods = await getRedGoods();

    this.setState({ goods });
  };

  render() {
    return (
      <div className="w-50 mx-auto mt-5">
        <h1 className="display-4 text-center">
          Dynamic list of Goods
        </h1>
        <div className="buttons d-flex mt-4 justify-content-around">
          <button
            type="button"
            className="btn btn-info text-light"
            onClick={this.setAllGoods}
          >
            Load all goods
          </button>

          <button
            type="button"
            className="btn btn-info text-light mx-3"
            onClick={this.set5First}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            className="btn btn-info text-light"
            onClick={this.setRedGoods}
          >
            Load red goods
          </button>
        </div>

        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
