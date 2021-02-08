import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './components/GoodList/GoodList';

import './App.scss';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    list: [],
  }

  buttonHandler = (callback) => {
    callback().then(result => this.setState({
      list: result,
    }));
  }

  render() {
    return (
      <>
        <button
          type="button"
          onClick={() => this.buttonHandler(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => this.buttonHandler(get5First)}
        >
          Load 5 first goods
        </button>
        <button type="button" onClick={() => this.buttonHandler(getRedGoods)}>
          Load red goods
        </button>
        <GoodList list={this.state.list} />
      </>
    );
  }
}

export default App;
