import React from 'react';
import 'bulma';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList';
import { Buttons } from './components/Buttons';

class App extends React.Component {
  state = {
    goods: [],
  }

  addAllGoods = () => {
    getAll()
      .then((allGoods) => {
        this.setState({
          goods: [...allGoods],
        });
      });
  }

  addFiveGoods = () => {
    get5First()
      .then((fiveGoods) => {
        this.setState({
          goods: [...fiveGoods],
        });
      });
  }

  addRedGoods = () => {
    getRed()
      .then((redGoods) => {
        this.setState({
          goods: [...redGoods],
        });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1 className="title">
          Dynamic list of Goods
        </h1>

        <Buttons
          addAllGoods={this.addAllGoods}
          addFiveGoods={this.addFiveGoods}
          addRedGoods={this.addRedGoods}
        />

        <div className="content">
          <GoodsList goods={goods} />
        </div>
      </>
    );
  }
}

export default App;
