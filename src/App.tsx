import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__heading">
          Dynamic list of Goods
        </h1>
        <button
          type="button"
          className="App__button"
          onClick={() => (
            getAll()
              .then(goods => {
                this.setState({ goods });
              })
          )}
        >
          Load All goods
        </button>
        <button
          type="button"
          className="App__button"
          onClick={() => (
            get5First()
              .then(goods => {
                this.setState({ goods });
              })
          )}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          className="App__button"
          onClick={() => (
            getRedGoods()
              .then(goods => {
                this.setState({ goods });
              })
          )}
        >
          Load red goods
        </button>
        {
          (this.state.goods.length > 0)
          && (
            <GoodsList
              goods={this.state.goods}
            />
          )
        }
      </div>
    );
  }
}

export default App;
