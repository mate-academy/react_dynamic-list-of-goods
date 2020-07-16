import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { fetchGoods } from './api/goods';

interface State {
  goods: Good[];
  error: boolean;
}

class App extends React.Component {
  state: State = {
    goods: [],
    error: false,
  };

  loadGoods = () => {
    fetchGoods<Good>()
      .then(response => {
        this.setState({
          goods: response.data,
        });
      })
      .catch(error => {
        this.setState({
          error,
        });
      });
  };

  loadFiveGoods = () => {
    fetchGoods<Good>()
      .then(response => {
        this.setState({
          goods: [...response.data].sort((a, b) => (
            a.name.localeCompare(b.name))).slice(0, 5),
        });
      })
      .catch(error => {
        this.setState({
          error,
        });
      });
  };

  loadRedGoods = () => {
    fetchGoods<Good>()
      .then(response => {
        this.setState({
          goods: response.data.filter(item => item.color === 'red'),
        });
      })
      .catch(error => {
        this.setState({
          error,
        });
      });
  };

  render() {
    const { goods, error } = this.state;

    return (
      <div className="container">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          className="btn"
          onClick={this.loadGoods}
        >
          Load all goods
        </button>
        <button
          type="button"
          className="btn"
          onClick={this.loadFiveGoods}
        >
          Load 5 goods
        </button>
        <button
          type="button"
          className="btn"
          onClick={this.loadRedGoods}
        >
          Load red goods
        </button>
        {error
          ? (
            <div>
              Error
            </div>
          )
          : <GoodsList goods={goods} />}
      </div>
    );
  }
}

export default App;
