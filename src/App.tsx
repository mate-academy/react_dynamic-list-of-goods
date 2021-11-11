import React from 'react';
import './App.scss';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';
import { GoodsList } from './components/GoodsList';

export class App extends React.Component {
  state = {
    goods: [],
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={() => {
            goodsAPI.getAll()
              .then(result => {
                this.setState({ goods: result });
              });
          }}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => {
            goodsAPI.get5First()
              .then(result => {
                this.setState({ goods: result });
              });
          }}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => {
            goodsAPI.getRedGoods()
              .then(result => {
                this.setState({ goods: result });
              });
          }}
        >
          Load red goods
        </button>

        <div>
          <ul>
            <GoodsList
              goods={goods}
            />
          </ul>
        </div>
      </>
    );
  }
}
export default App;
