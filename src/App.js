import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  fetchData = async(getData) => {
    const goods = await getData();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <button
          type="button"
          onClick={() => this.fetchData(getAll)}
        >
          Load all goods
        </button>

        <button
          type="button"
          onClick={() => this.fetchData(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.fetchData(getRedGoods)}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
