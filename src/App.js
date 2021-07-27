import React from 'react';
import { GoodsList } from './components/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  showGoods = async(name) => {
    if (await getAll() === 'something wrong...') {
      this.setState({
        goods: null,
      });

      return;
    }

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
        { this.state.goods
          ? <GoodsList goods={this.state.goods} />
          : <div>Something wrong...</div>
        }
        <button
          type="button"
          name="showAll"
          onClick={
            () => this.showGoods('showAll')
          }
        >
          Show all
        </button>
        <button
          type="button"
          name="showFiveFirst"
          onClick={
            () => this.showGoods('showFiveFirst')
          }
        >
          Show 5 first goods
        </button>
        <button
          type="button"
          name="showRed"
          onClick={
            () => this.showGoods('showRed')
          }
        >
          Show red goods
        </button>
      </>
    );
  }
}

export default App;
