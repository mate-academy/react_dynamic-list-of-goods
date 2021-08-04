import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

import './App.scss';

class App extends React.Component {
  state = {
    goods: [],
  }

  handleClick = async(onGet) => {
    const goods = await onGet();

    this.setState({
      goods,
    });
  }

  render() {
    const { goods } = this.state;
    const { handleClick } = this;

    return (
      <div>
        <h1>List of goods</h1>
        <button
          type="button"
          onClick={() => handleClick(getAll)}
        >
          Load All Goods
        </button>
        <button
          type="button"
          onClick={() => handleClick(get5First)}
        >
          Load 5 first Goods
        </button>
        <button
          type="button"
          onClick={() => handleClick(getRedGoods)}
        >
          Load Red Goods
        </button>
        {goods.length > 0 && <GoodsList goods={goods} />}
      </div>
    );
  }
}

export default App;
