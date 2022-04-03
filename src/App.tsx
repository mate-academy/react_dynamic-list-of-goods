import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type Props = {};
type State = {
  goods: Good[],
};

class App extends React.Component<Props, State> {
  state = {
    goods: [],
  };

  handleButton = (getGoods: () => Promise<Good[]>) => {
    getGoods()
      .then(result => {
        this.setState({ goods: result });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          Dynamic list of Goods
        </h1>

        <div className="App__button-box">
          <button
            className="App__button"
            type="button"
            onClick={() => this.handleButton(getAll)}
          >
            Load All goods
          </button>

          <button
            className="App__button"
            type="button"
            onClick={() => this.handleButton(get5First)}
          >
            Load 5 first goods
          </button>

          <button
            className="App__button"
            type="button"
            onClick={() => this.handleButton(getRedGoods)}
          >
            Load red goods
          </button>
        </div>

        <GoodsList
          goods={goods}
        />
      </div>
    );
  }
}

export default App;
