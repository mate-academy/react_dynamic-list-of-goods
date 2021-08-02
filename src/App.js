import React from 'react';
import './App.scss';
import { GoodsList } from './Components/GoodsList';

import { getRed, getAll, get5First } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  renderGoodsList = (getGoods) => {
    getGoods()
      .then(goods => this.setState({
        goods,
      }));
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => this.renderGoodsList(getAll)}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.renderGoodsList(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.renderGoodsList(getRed)}
          >
            Load red goods
          </button>
        </div>
        {goods.length > 0
          ? <GoodsList goods={goods} />
          : null}
      </>
    );
  }
}

export default App;
