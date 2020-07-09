/* eslint-disable no-console */
import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';
import { getGoods } from './api';
import { GoodInterface } from './interfaces';

interface State {
  isLoading: boolean;
  goods: GoodInterface[];
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    isLoading: false,
  };

  loadFive = async () => {
    this.setState({ isLoading: true });
    const goods = await getGoods<GoodInterface>();
    const sorted = goods.data.sort((a, b) => {
      return (a.name > b.name) ? 1 : -1;
    });

    this.setState({ goods: sorted.slice(0, 5), isLoading: false });
  };

  loadAll= async () => {
    this.setState({ isLoading: true });
    const goods = await getGoods<GoodInterface>();

    this.setState({
      goods: goods.data,
      isLoading: false,
    });
  };

  loadRed = async () => {
    this.setState({ isLoading: true });
    const goods = await getGoods<GoodInterface>();
    const filtered = goods.data.filter(good => good.color === 'red');

    this.setState({
      goods: filtered,
      isLoading: false,
    });
  };

  render() {
    const { goods, isLoading } = this.state;

    return (
      <div>
        <div className="container">
          <button type="button" onClick={this.loadAll}>Load all</button>
          <button type="button" onClick={this.loadFive}>Load five</button>
          <button type="button" onClick={this.loadRed}>Load red</button>
        </div>
        <>
          {
            (isLoading)
              ? (
                <p>Loading....</p>
              )
              : (
                <GoodsList goods={goods} />
              )
          }

        </>
      </div>
    );
  }
}

export default App;
