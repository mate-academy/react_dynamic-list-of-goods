import React from 'react';
import './App.scss';
import GoodsList from './GoodsList';

const goodsFromAPI = () => {
  return fetch('https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json')
    .then(res => res.json());
};

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  showAll = () => {
    goodsFromAPI()
      .then(goods => {
        this.setState({
          goods,
        });
      });
  };

  show5 = () => {
    goodsFromAPI()
      .then(goods => {
        const filteredFive = goods.filter((good: { id: number; }) => good.id <= 5);

        this.setState({
          goods: filteredFive,
        });
      });
  };

  showRed = () => {
    goodsFromAPI()
      .then(goods => {
        const filteredRed = goods.filter((good: { color: string; }) => good.color === 'red');

        this.setState({
          goods: filteredRed,
        });
      });
  };

  render() {
    return (
      <div className="main">
        <button type="button" onClick={this.showAll} className="btn btn-outline-primary button">Show All</button>
        <button type="button" onClick={this.show5} className="btn btn-outline-info button">Show 5</button>
        <button type="button" onClick={this.showRed} className="btn btn-outline-danger button">Show Red</button>
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
