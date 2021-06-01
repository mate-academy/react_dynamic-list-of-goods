import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';

import './App.scss';
import { GoodsList } from './GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  render() {
    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => {
            getAll()
              .then((goods) => {
                this.setState({
                  goods,
                });
              });
          }
          }
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => {
            get5First()
              .then((goods) => {
                this.setState({
                  goods,
                });
              });
          }
          }
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => {
            getRedGoods()
              .then((goods) => {
                this.setState({
                  goods,
                });
              });
          }
          }
        >
          Load red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
