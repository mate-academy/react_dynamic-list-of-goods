import React from 'react';
import './App.scss';

import { get5First, getAll, getRedGoods } from './api/goods';
import { GoodList } from './components/GoodList';

type State = {
  goods: Good[],
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  handleClick = async (getGoods: Promise<Good[]>) => {
    const goods = await getGoods;

    this.setState({
      goods,
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of goods</h1>
        <div className="App__buttons">
          <button
            type="button"
            onClick={() => {
              this.handleClick(getAll());
            }}
          >
            Load all goods
          </button>
          <button
            type="button"
            onClick={() => {
              this.handleClick(get5First());
            }}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            onClick={() => {
              this.handleClick(getRedGoods());
            }}
          >
            Load red goods
          </button>
        </div>
        <GoodList goods={goods} />
      </div>
    );
  }
}

export default App;
