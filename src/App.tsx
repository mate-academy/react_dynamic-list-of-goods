import React from 'react';
import './App.css';
import { getListOfGoods } from './Api';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goodsList: [],
    isLoaded: false,
  };

  loadGoods = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget.dataset;

    switch (name) {
      case 'All':
        getListOfGoods()
          .then(goods => {
            this.setState({
              goodsList: goods,
              isLoaded: true,
            });
          });

        break;

      case 'FirstFive':
        getListOfGoods()
          .then(goods => {
            this.setState({
              goodsList: goods.slice(0, 5),
              isLoaded: true,
            });
          });

        break;

      case 'Red':
        getListOfGoods()
          .then(goods => {
            this.setState({
              goodsList: goods.filter((good: { color: string }) => good.color === 'red'),
              isLoaded: true,
            });
          });

        break;

      default:
        break;
    }
  };

  render() {
    const { goodsList, isLoaded } = this.state;

    return (
      <div className="App">
        <button
          className="button"
          type="button"
          data-name="All"
          onClick={this.loadGoods}
        >
          Load All Goods
        </button>
        <button
          className="button"
          type="button"
          data-name="FirstFive"
          onClick={this.loadGoods}
        >
          Load 5 first goods
        </button>
        <button
          className="button"
          type="button"
          data-name="Red"
          onClick={this.loadGoods}
        >
          Load red goods
        </button>
        {isLoaded && <GoodsList list={goodsList} />}
      </div>
    );
  }
}

export default App;
