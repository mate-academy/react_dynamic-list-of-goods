import React from 'react';
import { get5First } from './api/goods';

import './App.scss';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: ['l'],
  }

  renderGoods = async(getGoods) => {
    const goods = await getGoods();

    this.setState({ goods });
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          innerText="Load All goods"
          onClick={() => this.renderGoods(get5First)}
        >
          lol
        </button>
        {this.state.goods.map(d => (
          <div style={{ color: `${d.color}` }}>
            {d.name}
          </div>
        ))}
      </>
    );
  }
}

export default App;
