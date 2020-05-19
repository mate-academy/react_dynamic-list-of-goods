import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList/GoodsList';
import { Good } from './components/Interface';
import getGoods from './API/API';


interface State {
  goods: Good[];
}
class App extends React.Component {
  state: State = {
    goods: [],
  };

  handleLoadingAllGoodsOnClick = () => {
    getGoods()
      .then(goods => {
        this.setState({
          goods,
        });
      });
  };

  handleLoadFiveGoodsOnClick = () => {
    getGoods()
      .then(goods => {
        this.setState({
          goods: goods.sort((a: Good, b: Good) => (a.name.localeCompare(b.name))).slice(0, 5),
        });
      });
  };

  handleLoadRedGoodsOnClick = () => {
    getGoods()
      .then(goods => {
        this.setState({
          goods: goods.filter((good: Good) => (good.color === 'red')),
        });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <div className="buttons">
          <button
            type="button"
            onClick={this.handleLoadingAllGoodsOnClick}
          >
            Load All
          </button>
          <button
            type="button"
            onClick={this.handleLoadFiveGoodsOnClick}
          >
            Load Five Items
          </button>
          <button
            type="button"
            onClick={this.handleLoadRedGoodsOnClick}
          >
            Load Red Items
          </button>
        </div>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;
