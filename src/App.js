import React from 'react';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodList } from './components/GoodList';

class App extends React.Component {
  state = {
    goods: [],
  }

  setGoods = (getGoods) => {
    getGoods()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <div>
          <button
            className="App__button"
            type="button"
            onClick={() => this.setGoods(getAll)}
          >
            All
          </button>

          <button
            className="App__button"
            type="button"
            onClick={() => this.setGoods(get5First)}
          >
            5 First
          </button>

          <button
            className="App__button"
            type="button"
            onClick={() => this.setGoods(getRed)}
          >
            Red
          </button>
        </div>

        <GoodList
          goods={goods}
        />
      </div>
    );
  }
}

export default App;
