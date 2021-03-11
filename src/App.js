import React from 'react';
import 'bulma';
import './App.scss';
import className from 'classnames';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
    loading: false,
  }

  onLoadGoods = async(goodsFromServer) => {
    this.setState({ loading: true });

    const goods = await goodsFromServer();

    this.setState({
      goods,
      loading: false,
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
          id="1"
          className={className(
            'button',
            'is-dark',
          )}
          disabled={this.state.loading}
          onClick={() => this.onLoadGoods(getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          id="2"
          className={className(
            'button',
            'is-dark',
          )}
          disabled={this.state.loading}
          onClick={() => this.onLoadGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          id="3"
          className={className(
            'button',
            'is-dark',
          )}
          disabled={this.state.loading}
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
