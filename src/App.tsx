import React from 'react';
import 'bulma/css/bulma.min.css';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  getAllGoods = async () => {
    const goods = await getAll();

    this.setState({ goods });
  };

  get5First = async () => {
    const goods = await get5First();

    const newGoods = goods.slice(0, 5);

    this.setState({ goods: newGoods });
  };

  getRedGoods = async () => {
    const goods = await getRedGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="p-5">
        <div className="pb-2">
          <button
            type="submit"
            className="button is-success is-small"
            onClick={this.getAllGoods}
          >
            Load All goods
          </button>
          {' '}
          <button
            type="submit"
            className="button is-info is-small"
            onClick={this.get5First}
          >
            Load 5 first goods
          </button>
          {' '}
          <button
            type="submit"
            className="button is-danger is-small"
            onClick={this.getRedGoods}
          >
            Load red goods
          </button>
        </div>

        {goods.length !== 0 && (
          <GoodsList goods={goods} />
        )}
      </div>
    );
  }
}

export default App;
