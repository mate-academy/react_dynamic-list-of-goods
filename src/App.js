import React from 'react';
import './App.scss';
import { GoodList } from './GoodList';

import { getAll, get5first, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  getData = async() => {
    const preparedGoods = await getAll();

    this.setState({ goods: preparedGoods });
  }

  show5first = async() => {
    const preparedGoods = await get5first();

    this.setState({ goods: preparedGoods });
  }

  showRed = async() => {
    const preparedGoods = await getRed();

    this.setState({ goods: preparedGoods });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={this.getData}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={this.show5first}
        >
          Load 5 goods
        </button>

        <button
          type="button"
          onClick={this.showRed}
        >
          Load red goods
        </button>

        <GoodList
          goods={goods}
        />
      </>
    );
  }
}

export default App;
