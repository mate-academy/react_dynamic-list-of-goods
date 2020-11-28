import React from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

export class App extends React.Component {
  state = {
    goods: [],
  }

  handleClick = async(promise) => {
    const goods = await promise();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;
    const buttonNames = {
      all: getAll,
      '5 first': get5First,
      red: getRedGoods,
    };

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <h2>{`Counter: ${goods.length}`}</h2>
        {Object.entries(buttonNames).map(name => (
          <button type="button" onClick={() => this.handleClick(name[1])}>
            {`${name[0]} goods`}
          </button>
        ))}
        <GoodsList goods={goods} />
      </div>
    );
  }
}
