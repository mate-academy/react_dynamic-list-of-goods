import React from 'react';
import './App.css';
import { getGoods } from './helpers/getGoods';
import { GoodsList } from './components/GoodsList';
import { Good } from './components/TypeDefinitions';

type AppState = {
  goods: Good[];
  loadingError: boolean;
};

class App extends React.Component<{}, AppState> {
  state ={
    goods: [],
    loadingError: false,
  };

  errorMessage = <p>Sorry, no data here</p>;

  setGoods = (goods: Good[]) => {
    setTimeout(() => this.setState({
      goods,
      loadingError: false,
    }), 1000);
  };

  loadAllGoods = () => {
    getGoods()
      .then(this.setGoods)
      .catch(() => this.setState({ loadingError: true }));
  };

  loadRed = () => {
    getGoods()
      .then(goods => goods.filter(good => good.color === 'red'))
      .then(this.setGoods)
      .catch(() => this.setState({ loadingError: true }));
  };

  load5 = () => {
    getGoods()
      .then(goods => goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5))
      .then(this.setGoods)
      .catch(() => this.setState({ loadingError: true }));
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        {this.state.loadingError
          ? this.errorMessage
          : (
            <>
              <GoodsList goods={this.state.goods} />
              <button type="button" onClick={this.loadAllGoods}>Load all</button>
              <button type="button" onClick={this.load5}>Load 5</button>
              <button type="button" onClick={this.loadRed}>Load RED</button>
            </>
          )}
      </>
    );
  }
}


export default App;
