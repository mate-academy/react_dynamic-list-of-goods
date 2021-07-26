import React from 'react';
import { GoodsList } from './components/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  showGoods = async(name) => {
    let goods;

    switch (name) {
      case 'showAll':
        goods = await getAll();
        break;
      case 'showFiveFirst':
        goods = await get5First();
        break;
      case 'showRed':
        goods = await getRedGoods();
        break;
      default:
        break;
    }

    this.setState({
      goods,
    });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <GoodsList
          goods={
            this.state.goods
          }
        />
        <button
          type="button"
          name="showAll"
          onClick={
            ({ target }) => this.showGoods(target.name)
          }
        >
          Show all
        </button>
        <button
          type="button"
          name="showFiveFirst"
          onClick={
            ({ target }) => this.showGoods(target.name)
          }
        >
          Show 5 first goods
        </button>
        <button
          type="button"
          name="showRed"
          onClick={
            ({ target }) => this.showGoods(target.name)
          }
        >
          Show red goods
        </button>
      </>
    );
  }
}

export default App;
