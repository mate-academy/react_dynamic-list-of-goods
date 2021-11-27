import React from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

interface State {
  goods: Good[]
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  changeButton = async (item: () => Promise<Good[]>) => {
    const goods = await item();

    this.setState({ goods });
  };

  render() {
    return (
      <div className="App">
        <h1>React dynamic list of goods</h1>
        <div className="App__goods">
          <div className="App__buttons">
            <button
              type="button"
              onClick={() => {
                this.changeButton(getAll);
              }}
            >
              Load All goods
            </button>
            <button
              type="button"
              onClick={() => {
                this.changeButton(get5First);
              }}
            >
              Load 5 first goods
            </button>
            <button
              type="button"
              onClick={() => {
                this.changeButton(getRedGoods);
              }}
            >
              Load red goods
            </button>
          </div>
          <GoodsList goods={this.state.goods} />
        </div>
      </div>
    );
  }
}

export default App;
