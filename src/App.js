import React from 'react';

import './App.scss';
import { Button } from './Button';
import { GoodsList } from './GoodsList';

import { getAllGoods, get5FirstGoods, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  getGoods = async(apiRequest) => {
    try {
      const goods = await apiRequest();

      this.setState({
        goods,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(error);
    }
  }

  resetGoods = () => {
    this.setState({
      goods: [],
    });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <Button
          onClick={() => this.getGoods(getAllGoods)}
          text="Load All goods"
        />
        <Button
          onClick={() => this.getGoods(get5FirstGoods)}
          text="Load 5 first goods"
        />
        <Button
          onClick={() => this.getGoods(getRedGoods)}
          text="Load red goods"
        />
        <Button
          onClick={this.resetGoods}
          text="RESET"
          className="btn btn--reset"
        />

        <GoodsList goodsList={this.state.goods} />
      </>
    );
  }
}

export default App;
