import React from 'react';
import 'bulma';
import '@fortawesome/fontawesome-free/css/all.css';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './components/GoodList';
import { Button } from './components/Button';

class App extends React.Component {
  state = {
    goods: [],
  }

  setGoods = (getGoods) => {
    getGoods()
      .then(goods => this.setState({ goods }));
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="app">
        <h1>Dynamic list of Goods</h1>
        <div>
          <Button
            onClick={() => this.setGoods(getAll)}
            name="All goods"
          />
          <Button
            onClick={() => this.setGoods(get5First)}
            name="5 first goods"
          />
          <Button
            onClick={() => this.setGoods(getRedGoods)}
            name="Red goods"
          />
        </div>
        <GoodList goods={goods} />
      </div>
    );
  }
}

export default App;
