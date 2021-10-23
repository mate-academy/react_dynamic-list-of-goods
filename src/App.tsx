import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRed } from './api/goods';

interface State {
  goods: Good[];
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  getGoodsList = async (goodsType: () => Promise<Good[]>) => {
    const goods = await goodsType();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <div className="container">
          <h1 className="title">Goods</h1>

          <button
            className="button"
            type="button"
            onClick={() => this.getGoodsList(getAll)}
          >
            Load All goods
          </button>

          <button
            className="button"
            type="button"
            onClick={() => this.getGoodsList(get5First)}
          >
            Load 5 first goods
          </button>

          <button
            className="button"
            type="button"
            onClick={() => this.getGoodsList(getRed)}
          >
            Load red goods
          </button>
        </div>

        {goods && (
          <GoodsList goods={goods} />
        )}
      </div>
    );
  }
}

export default App;
