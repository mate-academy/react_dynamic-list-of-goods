import React from 'react';
import { GoodsList } from './GoodsList/GoodsList';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';

// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: null,
  };

  allGoods = async() => {
    this.setState({
      goods: await getAll(),
    });
  };

  fiveGoods = async() => {
    this.setState({
      goods: await get5First(),
    });
  };

  redGoods = async() => {
    this.setState({
      goods: await getRedGoods(),
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <button type="button" onClick={this.allGoods}>
          All goods
        </button>

        <button type="button" onClick={this.fiveGoods}>
          5 goods
        </button>

        <button type="button" onClick={this.redGoods}>
          Red goods...
        </button>

        {goods && <GoodsList goods={goods} />}
      </>
    );
  }
}

export default App;
