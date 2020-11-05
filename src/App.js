import React from 'react';
import { GoodList } from './components/GoodList/GoodList';
import { Button } from './components/Button/Button';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  loadGoods = async(callback) => {
    this.setState({
      goods: await callback(),
    });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="app">
        <h1>Dynamic list of Goods</h1>
        <div className="app__buttons">
          <Button
            text="Load all goods"
            callback={() => this.loadGoods(getAll)}
          />
          <Button
            text="Load 5 first goods"
            callback={() => this.loadGoods(get5First)}
          />
          <Button
            text="Load red goods"
            callback={() => this.loadGoods(getRedGoods)}
          />
        </div>
        <GoodList
          goods={goods}
        />
      </div>
    );
  }
}

export default App;
