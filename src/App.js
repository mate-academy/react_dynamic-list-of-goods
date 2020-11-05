import React, { PureComponent } from 'react';
import GoodsList from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import './App.scss';
// eslint-disable-next-line max-len

class App extends PureComponent {
  state = {
    goodsToRender: null,
  }

  renderGoods = () => {
    getAll().then(goods => this.setState({ goodsToRender: goods }));
  }

  getRedsGoods = () => {
    getRedGoods().then(goods => this.setState({ goodsToRender: goods }));
  }

  getSortedGoods = () => {
    get5First().then(goods => this.setState({ goodsToRender: goods }));
  }

  render() {
    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <div className="ui buttons">
          <button
            className="ui button"
            onClick={this.renderGoods}
            type="button"
          >
            Load All goods
          </button>
          <button
            className="ui button"
            onClick={this.getSortedGoods}
            type="button"
          >
            Load 5 first goods
          </button>
          <button
            className="ui button"
            onClick={this.getRedsGoods}
            type="button"
          >
            Load red goods
          </button>
        </div>
        {this.state.goodsToRender
        && (
          <GoodsList
            goods={this.state.goodsToRender}
          />
        )
        }
      </div>
    );
  }
}

export default App;
