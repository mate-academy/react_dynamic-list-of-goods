import React from 'react';
import classnames from 'classnames';

import { GoodsList } from './GoodsList';
import './App.scss';

import { getAllGoods, get5FirstGoods, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
    loading: '',
    loadFailed: false,
  }

  updateGoods = (goods) => {
    this.setState({
      goods,
      loading: '',
    });
  }

  showErrorNote = () => {
    this.setState({
      loadFailed: true,
      loading: '',
    });
  }

  showAllGoods = async() => {
    this.setState({ loading: 'all' });
    try {
      await getAllGoods().then((goods) => {
        this.updateGoods(goods);
      });
    } catch (error) {
      this.showErrorNote();
    }
  }

  showFirst5Goods = async() => {
    this.setState({ loading: 'five' });

    try {
      await get5FirstGoods().then((goods) => {
        this.updateGoods(goods);
      });
    } catch (error) {
      this.showErrorNote();
    }
  }

  showRedGoods = async() => {
    this.setState({ loading: 'red' });

    try {
      await getRedGoods().then((goods) => {
        this.updateGoods(goods);
      });
    } catch (error) {
      this.showErrorNote();
    }
  }

  render() {
    const { goods, loading, loadFailed } = this.state;

    return (
      <section className="App">
        <div className="container">
          <h1 className="title is-1">Dynamic list of Goods</h1>

          <div className="buttons">
            <button
              className={classnames('button', 'is-info', {
                'is-loading': loading === 'all',
              })}
              type="button"
              onClick={this.showAllGoods}
            >
              Load all goods
            </button>

            <button
              className={classnames('button', 'is-info', {
                'is-loading': loading === 'five',
              })}
              type="button"
              onClick={this.showFirst5Goods}
            >
              Load 5 first goods
            </button>

            <button
              className={classnames('button', 'is-info', {
                'is-loading': loading === 'red',
              })}
              type="button"
              onClick={this.showRedGoods}
            >
              Load red goods
            </button>
          </div>

          <GoodsList goods={goods} />

          {loadFailed && (
            <div className="notification is-danger is-light">
              Failed loading data from server
            </div>
          )}

        </div>
      </section>
    );
  }
}

export default App;
