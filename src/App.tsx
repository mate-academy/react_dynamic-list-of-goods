import React from 'react';
import { GoodsList } from './components/GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  visibleGoods: Good[];
};

class App extends React.Component<{}, State> {
  state = {
    visibleGoods: [],
  };

  handlerClick = (fetch: Promise<Good[]>) => {
    fetch.then(goods => {
      this.setState({
        visibleGoods: [...goods],
      });
    });
  };

  render() {
    const { visibleGoods } = this.state;

    return (
      <body className="body m-4">
        <div className="buttons">
          <button
            type="button"
            className="button"
            onClick={() => this.handlerClick(getAll())}
          >
            Load all goods
          </button>
          <button
            type="button"
            className="button"
            onClick={() => this.handlerClick(get5First())}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="button"
            onClick={() => this.handlerClick(getRedGoods())}
          >
            Load red goods
          </button>
        </div>
        <GoodsList goods={visibleGoods} />
      </body>
    );
  }
}

export default App;
