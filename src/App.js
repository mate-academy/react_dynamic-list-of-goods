import React from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Button } from './components/Button';
import { GoodsList } from './components/GoodsList';

class App extends React.PureComponent {
  state = {
    goods: [],
  }

  loadAllGoods = async() => {
    const goods = await getAll();

    this.setState({ goods });
  }

  loadFiveGoods = async() => {
    const goods = await get5First();

    this.setState({ goods });
  }

  loadRedGoods = async() => {
    const goods = await getRedGoods();

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
            onClick={this.loadAllGoods}
            text="Load all goods"
          />
          <Button
            onClick={this.loadFiveGoods}
            text="Load 5 first goods"
          />
          <Button
            onClick={this.loadRedGoods}
            text="Load red goods"
          />
        </div>
        <GoodsList goodsList={goods} />
      </section>
    );
  }
}

export default App;
