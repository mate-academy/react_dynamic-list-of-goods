import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    allGoods: [],
    fiveFirstGoods: [],
    redGoods: [],
    chosenGoods: [],
  }

  async componentDidMount() {
    const allGoods = await getAll();
    const fiveFirstGoods = await get5First();
    const redGoods = await getRedGoods();

    this.setState({
      allGoods, fiveFirstGoods, redGoods,
    });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.setState(state => (
            { chosenGoods: state.allGoods }
          ))}
        >
          all goods
        </button>
        <button
          type="button"
          onClick={() => this.setState(state => (
            { chosenGoods: state.fiveFirstGoods }
          ))}
        >
          five first goods
        </button>
        <button
          type="button"
          onClick={() => this.setState(state => (
            { chosenGoods: state.redGoods }
          ))}
        >
          all red goods
        </button>
        <GoodsList goods={this.state.chosenGoods} />
      </>
    );
  }
}

export default App;
