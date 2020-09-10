import React from 'react';
import './App.scss';
import { GoodList } from './Components/GoodList';
import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  getData = async(getGoods) => {
    const goods = await getGoods();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <div className="buttons">
          <button
            type="button"
            onClick={() => this.getData(getAll)}
          >
            Load all goods
          </button>
          <button
            type="button"
            onClick={() => this.getData(get5First)}
          >
            Load first 5 goods
          </button>
          <button
            type="button"
            onClick={() => this.getData(getRedGoods)}
          >
            Load red goods
          </button>
        </div>
        <div>
          <GoodList goods={goods} />
        </div>
      </>
    );
  }
}

export default App;
