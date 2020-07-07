import React from 'react';
import './App.css';
import { getGoods } from './api/api';
import GoodsList from './Components/GoodsList';

type State = {
  goods: Product[];
  isLoading: boolean;
  hasError: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    isLoading: false,
    hasError: false,
  };

  showFiveItems = () => {
    this.setState({ isLoading: true, hasError: false, goods: [] });
    getGoods()
      .then((items) => this.setState({
        goods: items
          .sort((a: Product, b: Product) => a.name.localeCompare(b.name))
          .splice(0, 5),
        isLoading: false,
      }))
      .catch(() => this.setState({ hasError: true, isLoading: false }));
  };

  loadAllGoods = () => {
    this.setState({ isLoading: true, hasError: false, goods: [] });
    getGoods()
      .then((goodsFromServer) => this.setState({ goods: goodsFromServer, isLoading: false }))
      .catch(() => this.setState({ hasError: true, isLoading: false }));
  };

  showRedItems = () => {
    this.setState({ isLoading: true, hasError: false, goods: [] });
    getGoods()
      .then((goodsFromServer) => this.setState({
        goods: goodsFromServer.filter(
          (item: Product) => item.color === 'red',
        ),
        isLoading: false,
      }))
      .catch(() => this.setState({ hasError: true, isLoading: false }));
  };

  render() {
    const { isLoading, hasError } = this.state;

    return (
      <div className="wrapper">
        <button type="button" onClick={this.loadAllGoods} className="button">
          Load All Goods
        </button>

        <button type="button" onClick={this.showFiveItems} className="button">
          Show 5 Goods
        </button>

        <button type="button" onClick={this.showRedItems} className="button">
          Show Red Items
        </button>

        <div className="loader" hidden={!isLoading} />
        {hasError && <h3>Error, please try again</h3>}
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
