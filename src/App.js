import React from 'react';
import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import './App.scss';

class App extends React.Component {
  state = {
    goods: [],
    errorMessage: '',
  }

  getData = async(callback) => {
    try {
      const goodsFromServer = await callback();

      this.setState({
        goods: goodsFromServer,
      });
    } catch (error) {
      this.setState({
        errorMessage: `Can't load goods`,
      });
    }
  };

  render() {
    const { goods, errorMessage } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <div className="actions-btn">
          <button
            type="button"
            className="actions-btn--1"
            onClick={() => this.getData(getAll)}
          >
            All
          </button>
          <button
            type="button"
            className="actions-btn--2"
            onClick={() => this.getData(get5First)}
          >
            5First
          </button>
          <button
            type="button"
            className="actions-btn--3"
            onClick={() => this.getData(getRed)}
          >
            Red only
          </button>
        </div>

        {!errorMessage ? goods && (
          <GoodsList goods={goods} />
        ) : (
          <p className="error">{errorMessage}</p>
        )}
      </div>
    );
  }
}

export default App;
