import React from 'react';
import { GoodsList } from './components/GoodsList';

import './App.scss';
import { get5First, getAll, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  handleOnClick = (callback) => {
    callback()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <section className="goods">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.handleOnClick(getAll)
        }
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => this.handleOnClick(get5First)
        }
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.handleOnClick(getRedGoods)
        }
        >
          Load red goods
        </button>
        {goods.length > 0 && (
          <GoodsList goods={goods} />
        )}
      </section>
    );
  }
}

export default App;
