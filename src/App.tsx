import React from 'react';
import './App.scss';
import 'bulma';
import { Table } from './components/Table';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[]
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  componentDidMount() {
    this.loadAll();
  }

  loadAll = () => {
    getAll()
      .then(goods => {
        this.setState({ goods });
      });
  };

  load5First = () => {
    get5First()
      .then(goods => {
        this.setState({ goods });
      });
  };

  loadRedGoods = () => {
    getRedGoods()
      .then(goods => {
        this.setState({ goods });
      });
  };

  render() {
    return (
      <div>
        <button type="button" className="button" onClick={this.loadAll}>Load All goods</button>
        <button type="button" className="button" onClick={this.load5First}>Load 5 first goods</button>
        <button type="button" className="button" onClick={this.loadRedGoods}>Load red goods</button>
        <Table goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
