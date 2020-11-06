import React from 'react';
import { Buttons } from './components/Buttons';
import { GoodsList } from './components/GoodsList';

import './App.scss';

class App extends React.Component {
  state = {
    goods: [],
  }

  addGoods = (callback) => {
    callback()
      .then(goods => this.setState({ goods }));
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="container">
        <h1 className="container__title">Dynamic list of Goods</h1>
        <Buttons addGoods={this.addGoods} />
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
