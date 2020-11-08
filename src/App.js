import React, { PureComponent } from 'react';
import GoodsList from './components/GoodsList';
import './App.scss';
import { requestGoods, get5First, getRedGoods } from './api/goods';

// eslint-disable-next-line max-len

class App extends PureComponent {
  state = {
    goodsToRender: null,
  }

  renderGoods = callback => callback()
    .then(goods => this.setState({ goodsToRender: goods }));

  render() {
    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <div className="ui buttons">
          <button
            className="ui button"
            onClick={() => this.renderGoods(requestGoods)}
            type="button"
          >
            Load All goods
          </button>
          <button
            className="ui button"
            type="button"
            onClick={() => this.renderGoods(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            className="ui button"
            type="button"
            onClick={() => this.renderGoods(getRedGoods)}
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
