import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  loadAll = () => {
    getAll()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  loadFirst = () => {
    get5First()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  loadRed = () => {
    getRedGoods()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="buttons">
        <button
          type="submit"
          onClick={() => {
            this.loadAll();
          }}
        >
          Load All goods
        </button>
        <button
          type="submit"
          onClick={() => {
            this.loadFirst();
          }}
        >
          Load 5 first goods
        </button>
        <button
          type="submit"
          onClick={() => {
            this.loadRed();
          }}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
