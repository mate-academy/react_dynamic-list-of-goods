import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

type State = {
  goodsFromServer: Good[] | null
};

class App extends React.Component<{}, State> {
  state: State = {
    goodsFromServer: null,
  };

  handleLoadGoods = async () => {
    this.setState({
      goodsFromServer: await getAll(),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.handleLoadGoods}
          className="App__button"
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={async () => {
            this.setState({
              goodsFromServer: await get5First(),
            });
          }}
          className="App__button"
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={async () => {
            this.setState({
              goodsFromServer: await getRedGoods(),
            });
          }}
          className="App__button"
        >
          Load red goods
        </button>
        {this.state.goodsFromServer !== null && <GoodsList goods={this.state.goodsFromServer} />}
      </div>
    );
  }
}

export default App;
