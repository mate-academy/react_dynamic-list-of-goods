import React from 'react';
import { GoodsList } from './components/GoodsList';

import 'bulma/css/bulma.css';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadGoods = (goodsFunction) => {
    goodsFunction()
      .then((goods) => {
        this.setState({
          goods: [...goods],
        });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="box">
        <h1 className="title is-1">Dynamic list of Goods</h1>
        <div className="button_wrap">
          <button
            className="button is-link is-rounded"
            onClick={() => (this.loadGoods(getAll))}
            type="button"
          >
            Load All goods
          </button>

          <button
            className="button is-primary is-rounded"
            onClick={() => (this.loadGoods(get5First))}
            type="button"
          >
            Load 5 first goods
          </button>

          <button
            className="button is-danger is-rounded"
            onClick={() => (this.loadGoods(getRedGoods))}
            type="button"
          >
            Load red goods
          </button>
        </div>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
