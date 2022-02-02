import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type Props = {};

type State = {
  visibleGoods: Good[]
};

class App extends React.Component<Props, State> {
  state: State = {
    visibleGoods: [],
  };

  handlerClick = (fetch: Promise<Good[]>) => {
    fetch.then(goods => this.setState({
      visibleGoods: [...goods],
    }));
  };

  render() {
    const { visibleGoods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          className="button"
          type="button"
          onClick={() => this.handlerClick(getAll())}
        >
          Load All goods
        </button>

        <button
          className="button"
          type="button"
          onClick={() => this.handlerClick(get5First())}
        >
          Load 5 first goods
        </button>

        <button
          className="button"
          type="button"
          onClick={() => this.handlerClick(getRedGoods())}
        >
          Load red goods
        </button>

        {visibleGoods && <GoodsList goods={visibleGoods} />}
      </>

    );
  }
}

export default App;
