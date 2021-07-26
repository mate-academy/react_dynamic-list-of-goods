import React from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';

class App extends React.Component {
  state = {
    goods: [],
  };

  onAllGoodsLoad = async() => {
    const goods = await getAll();

    this.setState({ goods });
  }

  onFirstGoodsLoad = async() => {
    const goods = await get5First();

    this.setState({ goods });
  }

  onRedGoodsLoad = async() => {
    const goods = await getRedGoods();

    this.setState({ goods });
  }

  render() {
    const {
      goods,
    } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <GoodsList goods={goods} />
        <div className="btn-group" role="group" aria-label="Basic example">
          <Button
            innerText="Load All goods"
            action={this.onAllGoodsLoad}
          />
          <Button
            innerText="Load 5 first goods"
            action={this.onFirstGoodsLoad}
          />
          <Button
            innerText="Load red goods"
            action={this.onRedGoodsLoad}
          />
        </div>
      </div>
    );
  }
}

export default App;
