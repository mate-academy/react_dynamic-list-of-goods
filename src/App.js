import React from 'react';
import { GoodsList } from './GoodsList';
import './App.scss';
import { getAll, getRedGoods, get5First } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  showAllHandler = (callback) => {
    callback()
      .then(goods => this.setState({ goods }));
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={() => this.showAllHandler(getAll)}
        >
          show all
        </button>
        <button
          type="button"
          onClick={() => this.showAllHandler(get5First)}
        >
          show 5 first
        </button>
        <button
          type="button"
          onClick={() => this.showAllHandler(getRedGoods)}
        >
          show only red
        </button>
        {this.state.goods.length > 0 && (
          <div className="wrapper">
            <h2>Table</h2>
            <GoodsList goods={this.state.goods} />
          </div>
        )}
      </>
    );
  }
}

export default App;
