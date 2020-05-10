import React from 'react';
import './App.css';
import { GoodsList, Good } from './GoodsList';
import getGoods from './api';


interface State {
  goodsList: Array<Good>;
  isLoaded: boolean;
}


class App extends React.Component {
  state: State = {
    goodsList: [],
    isLoaded: false,
  };


  handleLoadAllGoodsButtonClick = () => {
    this.setState({
      isLoaded: true,
    });
    getGoods()
      .then(goods => {
        this.setState({
          goodsList: goods,
          isLoaded: false,
        });
      });
  };

  handleLoadFiveGoodsButtonClick = () => {
    this.setState({
      isLoaded: true,
    });
    getGoods()
      .then(goods => {
        this.setState({
          goodsList: goods.slice(0, 5).sort((a: Good, b: Good) => (a.name.localeCompare(b.name))),
          isLoaded: false,
        });
      });
  };

  handleLoadRedGoodsButtonClick = () => {
    this.setState({
      isLoaded: true,
    });
    getGoods()
      .then(goods => {
        this.setState({
          goodsList: goods.filter((good: Good) => (good.color === 'red')),
          isLoaded: false,
        });
      });
  };


  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <div className="button-set">
          <button type="button" onClick={this.handleLoadAllGoodsButtonClick}>Load All goods</button>
          <button type="button" onClick={this.handleLoadFiveGoodsButtonClick}>Load first five goods</button>
          <button type="button" onClick={this.handleLoadRedGoodsButtonClick}>Load red goods</button>
        </div>
        {(this.state.isLoaded)
          ? 'Data is loading...'
          : <GoodsList goods={this.state.goodsList} />}


      </>
    );
  }
}
export default App;
