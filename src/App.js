import React from 'react';
import { GoodList } from './components/GoodList';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  handleChange = async(func) => {
    const result = await func();

    this.setState({ goods: result });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Dynamic list of Goods</h1>

        <div className="buttons App__buttons">
          <button
            type="button"
            className="buttons__button"
            onClick={() => {
              this.handleChange(getAll);
            }}
          >
            Load All Goods
          </button>

          <button
            type="button"
            className="buttons__button"
            onClick={() => {
              this.handleChange(get5First);
            }}
          >
            Load 5 First Goods
          </button>

          <button
            type="button"
            className="buttons__button"
            onClick={() => {
              this.handleChange(getRed);
            }}
          >
            Load Red Goods
          </button>
        </div>

        <GoodList goods={goods} />
      </div>
    );
  }
}

export default App;
