import React from 'react';
import { GoodsList } from './components/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  showGoods = async(action) => {
    if (await getAll() === 'something wrong...') {
      this.setState({
        goods: null,
      });

      return;
    }

    this.setState({
      goods: await action(),
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
            () => this.showGoods(getAll)
          }
        >
          Show all
        </button>
        <button
          type="button"
          name="showFiveFirst"
          onClick={
            () => this.showGoods(get5First)
          }
        >
          Show 5 first goods
        </button>
        <button
          type="button"
          name="showRed"
          onClick={
            () => this.showGoods(getRedGoods)
          }
        >
          Show red goods
        </button>
      </>
    );
  }
}

export default App;
