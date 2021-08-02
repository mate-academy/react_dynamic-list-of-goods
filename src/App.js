import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import 'bulma';
import './App.scss';
import { Button } from './components/Button/Button';

class App extends React.Component {
  state= {
    goods: [],
  }

  getAllGoods = async() => {
    this.setState({ goods: await getAll() });
  }

  getFirstFiveGoods = async() => {
    this.setState({ goods: await get5First() });
  }

  getRedGoods = async() => {
    this.setState({ goods: await getRedGoods() });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="box">
        <h1
          className="title"
        >
          Dynamic list of Goods
        </h1>
        <div className="buttons">
          <Button
            text="All goods"
            handleClick={this.getAllGoods}
            className="is-warning"
          />
          <Button
            text="Five goods"
            handleClick={this.getFirstFiveGoods}
            className="is-warning"
          />
          <Button
            text="Red goods"
            handleClick={this.getRedGoods}
            className="is-warning"
          />
        </div>
        {goods.length > 0 && <GoodsList goods={goods} />}
      </div>
    );
  }
}

export default App;
