import React from 'react';
import 'bulma';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  onLoadGoods = (goodsFromServer) => {
    goodsFromServer()
      .then((response) => {
        this.setState({
          goods: [...response],
        });
      });
  }

  render() {
    return (
      <div className="App box">
        <div className="content">
          <h1>Dynamic list of Goods</h1>
        </div>

        <button
          type="button"
          className="button is-dark"
          onClick={() => this.onLoadGoods(getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          className="button is-dark"
          onClick={() => this.onLoadGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          className="button is-dark"
          onClick={() => this.onLoadGoods(getRedGoods)}
        >
          Load red goods
        </button>

        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
