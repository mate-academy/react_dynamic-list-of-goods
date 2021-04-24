import React from 'react';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
import Button from './utils/Button';

import './App.scss';

class App extends React.Component {
  state = {
    goods: [],
    hasLoadingError: false,
  }

  loadGoods = async(callback) => {
    const loadGoods = await callback();

    this.setState({ goods: loadGoods });
  }

  render() {
    const { goods, hasLoadingError } = this.state;

    return (
      <div className="container">
        <h1 className="text-center">Mate</h1>
        <div className="panel text-center">
          <Button
            type="button"
            action={this.loadGoods}
            callback={getAll}
            title="Load All goods"
          />
          <Button
            type="button"
            action={this.loadGoods}
            callback={get5First}
            title="Load 5 first goods"
          />
          <Button
            type="button"
            action={this.loadGoods}
            callback={getRedGoods}
            title="Load red goods"
          />
        </div>
        {goods.length !== 0 && (
          <div className="panel">
            <GoodsList goods={goods} />
          </div>
        )}
        {hasLoadingError && (
          <p style={{ color: 'red' }}>Loads error</p>
        )}
      </div>
    );
  }
}

export default App;
