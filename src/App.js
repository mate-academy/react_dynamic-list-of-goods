import React from 'react';
import './App.css';
import GoodsList from './GoodsList';

const URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';
const getGoods = () => {
  const dataPromise = fetch(URL)
    .then(response => response.json());

  return dataPromise;
};

class App extends React.Component {
  state = {
    goods: [],
    currentFilter: '',
  };

  showAllGoods= () => {
    const dataPromise = getGoods();

    dataPromise
      .then(data => this.setState({
        goods: data,
        currentFilter: 'allGoods',
      }));
  }

  showTopFiveGoods= () => {
    const dataPromise = getGoods();

    dataPromise
      .then(data => this.setState({
        goods: data.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
        currentFilter: 'topFiveGoods',
      }));
  }

  showRedGoods= () => {
    const dataPromise = getGoods();

    dataPromise
      .then(data => this.setState({
        goods: data.filter(({ color }) => color === 'red'),
        currentFilter: 'redGoods',
      }));
  }

  render() {
    const { goods, currentFilter } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          className={currentFilter === 'allGoods' ? 'clicked' : 'not-clicked'}
          onClick={this.showAllGoods}
        >
        Show all Goods
        </button>
        <button
          type="button"
          onClick={this.showTopFiveGoods}
          className={currentFilter === 'topFiveGoods' ? 'clicked' : 'not-clicked'}
        >
        Show top 5 goods
        </button>
        <button
          type="button"
          onClick={this.showRedGoods}
          className={currentFilter === 'redGoods' ? 'clicked' : 'not-clicked'}
        >
         Show red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
