import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  renderAllGoods = async() => {
    const goodsFromServer = await getAll();

    this.setState({
      goods: goodsFromServer,
    });
  };

  render5First = async() => {
    const first5 = await get5First();

    this.setState({
      goods: first5,
    });
  }

  renderRed = () => {
    getRedGoods().then((red) => {
      this.setState({
        goods: red,
      });
    });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <div className="buttons">
          <button
            type="button"
            onClick={this.renderAllGoods}
          >
            Load All goods
          </button>

          <button
            type="button"
            onClick={this.render5First}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            onClick={this.renderRed}
          >
            Load red goods
          </button>
        </div>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;
