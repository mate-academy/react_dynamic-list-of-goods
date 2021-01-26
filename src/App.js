import React from 'react';
import { GoodsList } from './components/GoodsList ';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  settingAllGoods = async() => {
    const goods = await getAll();

    this.setState({ goods });
  }

  setting5First = async() => {
    const goods = await get5First();

    this.setState({ goods });
  }

  settingOnlyRed = async() => {
    const goods = await getRedGoods();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <section>
        <h1>Dynamic list of Goods</h1>

        <div>
          <button
            type="button"
            onClick={this.settingAllGoods}
          >
            Load All goods
          </button>

          <button
            type="button"
            onClick={this.setting5First}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            onClick={this.settingOnlyRed}
          >
            Load red goods
          </button>

        </div>

        <GoodsList goods={goods} />
      </section>
    );
  }
}

export default App;
