import React from 'react';
import 'bulma';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './components/GoodList';

import './App.scss';

class App extends React.Component {
  state = {
    goods: [],
  };

  getAllHandler = () => {
    getAll()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

  get5FirstHandler = () => {
    get5First()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

  getRedHandler = () => {
    getRedGoods()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__title">Dynamic list of Goods</h1>

        <div className="App__buttons">
          <button
            type="button"
            className="button is-link"
            onClick={this.getAllHandler}
          >
            get all
          </button>

          <button
            type="button"
            className="button is-link"
            onClick={this.get5FirstHandler}
          >
            get 5
          </button>

          <button
            type="button"
            className="button is-link"
            onClick={this.getRedHandler}
          >
            get red
          </button>
        </div>

        <div className="App__list list">
          <GoodList goods={this.state.goods} />
        </div>
      </div>
    );
  }
}

export default App;
