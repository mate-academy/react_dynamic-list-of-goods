import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

interface State {
  goods: Good[];
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  showAllGoods = () => {
    getAll()
      .then(goods => {
        this.setState({ goods });
      });
  };

  show5FirstGoods = () => {
    get5First()
      .then(goods => {
        this.setState({ goods });
      });
  };

  showAllRedGoods = () => {
    getRedGoods()
      .then(goods => {
        this.setState({ goods });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <GoodsList goods={goods} />
        <button
          type="submit"
          onClick={this.showAllGoods}
        >
          Load All goods
        </button>
        <button
          type="submit"
          onClick={this.show5FirstGoods}
        >
          Load 5 first goods
        </button>
        <button
          type="submit"
          onClick={this.showAllRedGoods}
        >
          Load red goods
        </button>
      </>
    );
  }
}
export default App;
