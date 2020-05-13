import React from 'react';
import { getGoods } from './helpers/api';
import GoodsList from './components/GoodsList/GoodsList';
import './App.css';
import { IGood } from './models/IGood';


export default class App extends React.Component {
  state = {
    goods: []
  }

  showAllGoods = () => {
    getGoods()
      .then((goodsFromServer) => {
        this.setState({ goods: goodsFromServer as IGood[] });
      });
  };

  showFiveGoods = () => {
    getGoods()
      .then(goodsFromServer => {
        this.setState({
          goods: [...goodsFromServer]
            .sort((a: IGood, b: IGood) => (a.name).localeCompare(b.name))
            .splice(0, 5),
        });
      });
  };

  showRedGoods = () => {
    getGoods()
      .then((goodsFromServer) => {
        this.setState({ goods: goodsFromServer.filter((good: IGood) => good.color === 'red') });
      });
  };


  render() {
    const { goods } = this.state;
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <GoodsList goods={goods} />
        <button
          type="button"
          onClick={this.showAllGoods}
        >
          Load all
        </button>
        <button
          type="button"
          onClick = {this.showFiveGoods}
        >
          Load 5 goods
        </button>
        <button
          type="button"
          onClick = {this.showRedGoods}
        >
          Load only red
        </button>
      </>
    )
  }
}



