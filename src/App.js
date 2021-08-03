import React from 'react';
import { get5First, getAllGoods, getRedGoods } from './api/goods';
import { ButtonsList } from './components/ButtonsList';

import './App.scss';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  renderGoods = getGoods => (
    getGoods().then(goods => this.setState({ goods }))
  )

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.renderGoods(getAllGoods)}
        >
          Get all goods
        </button>

        <button
          type="button"
          name="Load 5 first goods"
          innerText="Load 5 first goods"
          onClick={() => this.renderGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          name="Load red goods"
          innerText="Load red goods"
          onClick={() => this.renderGoods(getRedGoods)}
        >
          Load red goods
        </button>
        <ButtonsList
          goods={this.state.goods}
          renderGoods={this.renderGoods}
        />
      </>
    );
  }
}

export default App;
