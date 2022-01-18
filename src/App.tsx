import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  handleChange = (callback: () => Promise<Good[]>) => {
    callback().then(good => this.setState({ goods: good }));
  };

  render() {
    return (
      <>
        <h1>Dynamic list of goods</h1>
        <button
          type="button"
          name="getAll"
          onClick={() => this.handleChange(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          name="get5First"
          onClick={() => this.handleChange(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          name="getRed"
          onClick={() => this.handleChange(getRed)}
        >
          Load red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

export default App;
