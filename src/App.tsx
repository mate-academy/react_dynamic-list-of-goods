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

  loadGoods = async (getGoods: () => Promise<Good[]>) => {
    const goods = await getGoods();

    this.setState({
      goods: [...goods],
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="p-5">
        <div className="pb-2">
          <button
            type="submit"
            className="button is-success is-small"
            onClick={() => this.loadGoods(getAll)}
          >
            Load All goods
          </button>
          {' '}
          <button
            type="submit"
            className="button is-info is-small"
            onClick={() => this.loadGoods(get5First)}
          >
            Load 5 first goods
          </button>
          {' '}
          <button
            type="submit"
            className="button is-danger is-small"
            onClick={() => this.loadGoods(getRedGoods)}
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
