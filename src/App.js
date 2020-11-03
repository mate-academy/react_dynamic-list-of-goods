import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  getGoods = (type) => {
    type()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <div className="app">
          <div className="buttons">
            <button
              type="button"
              className="button"
              name="getAll"
              onClick={() => {
                this.getGoods(getAll);
              }}
            >
              All Goods
            </button>
            <button
              type="button"
              className="button"
              name="get5First"
              onClick={() => {
                this.getGoods(get5First);
              }}
            >
              5 First Goods
            </button>
            <button
              type="button"
              className="button"
              name="getRedGoods"
              onClick={() => {
                this.getGoods(getRedGoods);
              }}
            >
              Red Goods
            </button>
          </div>
          <GoodsList goods={goods} />
        </div>
      </>
    );
  }
}

export default App;
