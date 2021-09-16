import { Component } from 'react';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

type State = {
  goods: Good[];
};

class App extends Component<{}, State> {
  state = {
    goods: [],
  };

  loadAllgoods = async () => {
    const goods = await getAll();

    this.setState({ goods });
  };

  load5First = async () => {
    const goods = await get5First();

    this.setState({ goods });
  };

  loadRedGoods = async () => {
    const goods = await getRedGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="w-50 mx-auto mt-5">
        <h1 className="text-center">Dynamic list of Goods</h1>
        <div className="btn-group d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.loadAllgoods}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.load5First}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.loadRedGoods}
          >
            Load red goods
          </button>
        </div>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
