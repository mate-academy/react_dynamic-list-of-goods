import React from 'react';
import 'bulma';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Button, GoodList } from './components/GoodList';

import './App.scss';

class App extends React.Component {
  state = {
    goods: [],
  };

  setGoods = (handler) => {
    handler()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__title">Dynamic list of Goods</h1>

        <div className="App__buttons">
          <Button
            title="get all"
            setGoods={this.setGoods}
            handler={getAll}
          />

          <Button
            title="get 5"
            setGoods={this.setGoods}
            handler={get5First}
          />

          <Button
            title="get red"
            setGoods={this.setGoods}
            handler={getRedGoods}
          />
        </div>

        <div className="App__list list">
          <GoodList goods={this.state.goods} />
        </div>
      </div>
    );
  }
}

export default App;
