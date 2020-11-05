import React, { PureComponent } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './components/GoodList';
import { Button } from './components/Button';

class App extends PureComponent {
  state = {
    goods: [],
  }

  loadAllGoods = async() => {
    const goods = await getAll();

    this.setState({ goods });
  }

  load5Goods = async() => {
    const goods = await get5First();

    this.setState({ goods });
  }

  loadRedGoods = async() => {
    const goods = await getRedGoods();

    this.setState({ goods });
  }

  render() {
    return (
      <section className="container d-flex flex-column align-items-center">
        <h1>Dynamic list of Goods</h1>
        <div className="f-flex">
          <Button
            onClick={this.loadAllGoods}
            title="Load All goods"
          />
          <Button
            onClick={this.load5Goods}
            title="Load 5 first goods"
          />
          <Button
            onClick={this.loadRedGoods}
            title="Load red goods"
          />
        </div>
        <GoodList goods={this.state.goods} />
      </section>
    );
  }
}

export default App;
