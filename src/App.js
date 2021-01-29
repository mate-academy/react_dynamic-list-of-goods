import React from 'react';
import './App.scss';
import { GoodList } from './components/GoodList/GoodList';
import { getAll, get5FirstHandler, getRedHandler } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  selectGoods = (responseGoods) => {
    responseGoods()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  render() {
    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <GoodList goods={this.state.goods} />
        <button
          onClick={() => this.selectGoods(getAll)}
          type="button"
        >
          getAll
        </button>
        <button
          onClick={() => this.selectGoods(get5FirstHandler)}
          type="button"
        >
          get5First
        </button>
        <button
          onClick={() => this.selectGoods(getRedHandler)}
          type="button"
        >
          getRed
        </button>
      </div>
    );
  }
}

export default App;
