import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  handleShow = (fromServer) => {
    fromServer()
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
            this.handleShow(getAll);
          }}
        >
          Load All goods
        </button>
        <button
          type="submit"
          onClick={() => {
            this.handleShow(get5First);
          }}
        >
          Load 5 first goods
        </button>
        <button
          type="submit"
          onClick={() => {
            this.handleShow(getRedGoods);
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
