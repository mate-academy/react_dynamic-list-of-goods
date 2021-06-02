import React from 'react';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import GoodsList from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  getAllGoods = async() => {
    const prepearedGoods = await getAll();

    this.setState({ goods: prepearedGoods });
  }

  get5FirstGoods = async() => {
    const prepearedGoods = await get5First();

    this.setState({ goods: prepearedGoods });
  }

  getRedGoods = async() => {
    const prepearedGoods = await getRed();

    this.setState({ goods: prepearedGoods });
  }

  render() {
    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <GoodsList goods={this.state.goods} />

        <button
          type="button"
          onClick={this.getAllGoods}
        >
          Display all goods
        </button>

        <button
          type="button"
          onClick={this.get5FirstGoods}
        >
          Display 5 firs goods
        </button>

        <button
          type="button"
          onClick={this.getRedGoods}
        >
          Display all red goods
        </button>
      </div>
    );
  }
}

export default App;
