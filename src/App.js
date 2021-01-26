import React from 'react';

import './App.scss';
import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    renderList: [],
  }

  handleAllgoods = () => (
    getAll()
      .then((allGoods) => {
        this.setState({
          renderList: allGoods,
        });
      })
  );

  handleFirstFiveGoods = () => (
    get5First()
      .then((first5goods) => {
        this.setState({
          renderList: first5goods,
        });
      })
  )

  handleRedGoods = () => (
    getRedGoods()
      .then((redGoods) => {
        this.setState({
          renderList: redGoods,
        });
      })
  )

  render() {
    const { renderList } = this.state;

    return (
      <div>
        <button
          type="submit"
          onClick={this.handleAllgoods}
        >
          Load All goods
        </button>

        <button
          type="submit"
          onClick={this.handleFirstFiveGoods}
        >
          Load 5 first goods
        </button>

        <button
          type="submit"
          onClick={this.handleRedGoods}
        >
          Load red goods
        </button>

        <GoodsList goods={renderList} />
      </div>
    );
  }
}

export default App;
