import React from 'react';
import { GoodsList } from './components/GoodsList';

import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadGoods = async(event) => {
    const { name } = event.target;
    let goods;

    switch (name) {
      case 'getAll': {
        goods = await getAll();
        break;
      }

      case 'get5First': {
        goods = await get5First();
        break;
      }

      default: {
        goods = await getRedGoods();
        break;
      }
    }

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <div className="buttons">
          <button
            name="getAll"
            type="button"
            onClick={(event) => {
              this.loadGoods(event);
            }}
          >
            getAll
          </button>
          <button
            name="getRedGoods"
            type="button"
            onClick={(event) => {
              this.loadGoods(event);
            }}
          >
            getRedGoods
          </button>
          <button
            name="get5First"
            type="button"
            onClick={(event) => {
              this.loadGoods(event);
            }}
          >
            get5First
          </button>
        </div>
        <GoodsList
          goods={goods}
        />
      </>
    );
  }
}

export default App;
