import React from 'react';
import './App.scss';
import { getAll, get5First, getRed } from './goods';
import { GoodsList } from './components/GoodsList/GoodsList';

export class App extends React.Component {
  state = {
    goods: [],
  }

  loadGoods = async(e) => {
    const { id } = e.target;
    let goods = [];

    switch (id) {
      case ('buttonAll'):
        goods = await getAll();
        break;
      case ('buttonFive'):
        goods = await get5First();
        break;
      case ('buttonRed'):
        goods = await getRed();
        break;
      default:
        return;
    }

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <div className="App_buttons">
          <button
            type="button"
            id="buttonAll"
            onClick={this.loadGoods}
          >
            Load All goods
          </button>
          <button
            type="button"
            id="buttonFive"
            onClick={this.loadGoods}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            id="buttonRed"
            onClick={this.loadGoods}
          >
            Load red goods
          </button>
        </div>

        <h1>Dynamic list of Goods</h1>
        <GoodsList goods={goods} />
      </div>

    );
  }
}
