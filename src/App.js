import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    chosenGoods: [],
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => {
            getAll().then(response => this.setState({ chosenGoods: response }));
          }}
        >
          all goods
        </button>
        <button
          type="button"
          onClick={() => {
            get5First().then(response => this.setState({
              chosenGoods: response,
            }));
          }}
        >
          five first goods
        </button>
        <button
          type="button"
          onClick={() => {
            getRedGoods().then(response => this.setState({
              chosenGoods: response,
            }));
          }}
        >
          all red goods
        </button>
        <GoodsList goods={this.state.chosenGoods} />
      </>
    );
  }
}

export default App;
