import React from 'react';

import './App.scss';
import { GoodsList } from './component/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.PureComponent {
  state = {
    goods: [],
  }

  loadGoods = (method) => {
    method()
      .then((result) => {
        this.setState({
          goods: result,
        });
      });
  }

  render() {
    return (
      <>
        <h1>Dynamic List</h1>
        <div className="App__buttons">
          <button
            className="list-button"
            type="button"
            onClick={() => {
              this.loadGoods(getAll);
            }}
          >
            Load All goods
          </button>

          <button
            className="list-button"
            type="button"
            onClick={() => {
              this.loadGoods(get5First);
            }}
          >
            Load first five goods
          </button>

          <button
            className="list-button"
            type="button"
            onClick={() => {
              this.loadGoods(getRedGoods);
            }}
          >
            Load red goods
          </button>

        </div>

        {this.state.goods.length > 0 && (
          <GoodsList goods={this.state.goods} />
        )}

      </>
    );
  }
}

export default App;
