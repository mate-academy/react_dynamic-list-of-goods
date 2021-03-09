import React from 'react';
import 'bulma';
import './App.scss';
import className from 'classnames';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
    loading: [],
  }

  // eslint-disable-next-line
  onLoadGoods = async (e, goodsFromServer) => {
    const { id } = e.target;

    this.setState(state => ({ loading: [...state.loading, id] }));

    const goods = await goodsFromServer();

    this.setState({
      goods,
      loading: [],
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
            { 'is-loading': this.state.loading.includes('1') },
          )}
          onClick={e => this.onLoadGoods(e, getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          id="2"
          className={className(
            'button',
            'is-dark',
            { 'is-loading': this.state.loading.includes('2') },
          )}
          onClick={e => this.onLoadGoods(e, get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          id="3"
          className={className(
            'button',
            'is-dark',
            { 'is-loading': this.state.loading.includes('3') },
          )}
          onClick={e => this.onLoadGoods(e, getRedGoods)}
        >
          Load red goods
        </button>

        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
