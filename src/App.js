import React from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Button } from './components/Button';
import { GoodsList } from './components/GoodsList';

class App extends React.PureComponent {
  state = {
    goods: [],
  }

  setGoods = async(getGoods) => {
    const goods = await getGoods();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <section className="section">
        <h1 className="title">
          Dynamic list of Goods
        </h1>
        <div className="buttons">
          <Button
            onClick={() => this.setGoods(getAll)}
            text="Load all goods"
          />
          <Button
            onClick={() => this.setGoods(get5First)}
            text="Load 5 first goods"
          />
          <Button
            onClick={() => this.setGoods(getRedGoods)}
            text="Load red goods"
          />
        </div>
        <GoodsList goodsList={goods} />
      </section>
    );
  }
}

export default App;
