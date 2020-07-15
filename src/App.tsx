import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';
import { getGoods } from './api';

interface State {
  goods: Good[];
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadAll = () => {
    getGoods()
      .then(({ data }) => {
        console.log(data);
        this.setState({ goods: data });
      });
  };

  loadOnlyRed = () => {
    getGoods()
      .then(({ data }) => {
        this.setState({ goods: data.filter((good: Good) => good.color === 'red') });
      });
  };

  loadFirstFive = () => {
    getGoods()
      .then(({ data }) => {
        this.setState({
          goods: [...data]
            .sort((a: Good, b: Good) => (a.name).localeCompare(b.name))
            .slice(0, 5),
        });
      });
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.loadAll}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={this.loadFirstFive}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={this.loadOnlyRed}
        >
          Load red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}
export default App;
