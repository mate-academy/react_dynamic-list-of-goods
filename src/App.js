import React from 'react';
import { GoodsList } from './components/GoodsList';

import 'bulma';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goodsList: [],
  }

  loadAllGoods = () => {
    getAll()
      .then((goods) => {
        this.setState({ goodsList: goods });
      });
  };

  loadFiveGoods = () => {
    get5First()
      .then((goods) => {
        this.setState({ goodsList: goods });
      });
  }

  loadRedGoods = () => {
    getRed()
      .then((goods) => {
        this.setState({ goodsList: goods });
      });
  }

  render() {
    const { goodsList } = this.state;

    return (
      <section className="hero is-fullheight is-primary is-bold">
        <div className="container">
          <h1 className="title">Dynamic list of goods</h1>

          <div className="buttons panel">
            <button
              className="button is-white"
              type="button"
              onClick={this.loadAllGoods}
            >
              Load All goods
            </button>

            <button
              className="button is-white"
              type="button"
              onClick={this.loadFiveGoods}
            >
              Load 5 first goods
            </button>

            <button
              className="button is-white"
              type="button"
              onClick={this.loadRedGoods}
            >
              Load red goods
            </button>
          </div>
          <div className="content">
            {goodsList.length > 0
              ? <GoodsList goods={goodsList} />
              : (
                <div className="box">
                  No data yet
                </div>
              )
            }
          </div>
        </div>
      </section>
    );
  }
}

export default App;
