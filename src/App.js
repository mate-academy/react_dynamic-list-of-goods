import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Button } from './components/Button';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state ={
    goods: [],
  }

  loadGoods = (func) => {
    func().then((goods) => {
      this.setState({ goods });
    });
  }

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <Button text="Get All" onClick={() => this.loadGoods(getAll)} />
        <Button text="Get 5 first" onClick={() => this.loadGoods(get5First)} />
        <Button
          text="Get red goods"
          onClick={() => this.loadGoods(getRedGoods)}
        />

        {goods.length > 0 && <GoodsList goods={goods} />}
      </div>
    );
  }
}

export default App;
