import React, { PureComponent } from 'react';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends PureComponent {
  state = {
    goods: [],
  }

  setGoods = async(functionType) => {
    const goods = await functionType();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <Button
          text="Load All goods"
          addClick={() => this.setGoods(getAll)}
        />
        <Button
          text="Load 5 first goods"
          addClick={() => this.setGoods(get5First)}
        />
        <Button
          text="Load red goods"
          addClick={() => this.setGoods(getRedGoods)}
        />
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
