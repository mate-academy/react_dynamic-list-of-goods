import React from 'react';

import './App.scss';
import { GoodsList } from './component/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.PureComponent {
  state = {
    goods: [],
  }

  loadAllGoods = () => {
    getAll()
      .then((result) => {
        this.setState({
          goods: result,
        });
      });
  }

  loadFirstFiveGoods = () => {
    get5First()
      .then((result) => {
        this.setState({
          goods: result,
        });
      });
  }

  loadRedGoods = () => {
    getRedGoods()
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
            onClick={this.loadAllGoods}
          >
            Load All goods
          </button>

          <button
            className="list-button"
            type="button"
            onClick={this.loadFirstFiveGoods}
          >
            Load first five goods
          </button>

          <button
            className="list-button"
            type="button"
            onClick={this.loadRedGoods}
          >
            Load red goods
          </button>

        </div>

        {this.state.goods.length > 0 && (
          <GoodsList goodsList={this.state.goods} />
        )}

      </>
    );
  }
}

export default App;
