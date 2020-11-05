import React from 'react';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { Button } from './Button';
import { GoodsList } from './GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadAll = () => {
    getAll()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  load5First = () => {
    get5First()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  loadRed = () => {
    getRed()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="app">
        <div className="app__container">
          <Button
            name="Load All goods"
            handleClick={this.loadAll}
          />
          <Button
            name="Load 5 first goods"
            handleClick={this.load5First}
          />
          <Button
            name="Load red goods"
            handleClick={this.loadRed}
          />
        </div>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
