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
    this.loadData(getAll());
  }

  loadData = (callback: Promise<Good[]>) => {
    callback
      .then(goods => {
        this.setState({ goods });
      });
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="button"
          onClick={() => this.loadData(getAll())}
        >
          Load All goods
        </button>
        <button
          type="button"
          className="button"
          onClick={() => this.loadData(get5First())}
        >
          Load 5 first goods

        </button>
        <button
          type="button"
          className="button"
          onClick={() => this.loadData(getRedGoods())}
        >
          Load red goods

        </button>
        <Table goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
