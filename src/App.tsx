import React from 'react';
import './App.css';
import { fetchGoods } from './api';
import { GoodsList } from './components/GoodsList/GoodsList';
import { GoodInterface } from './interfaces';

interface StateInterface {
  goods: GoodInterface[];
  error: boolean;
}

class App extends React.Component {
  state: StateInterface = {
    goods: [],
    error: false,
  };

  getAllGoods = () => {
    fetchGoods<GoodInterface>()
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

  getFiveGoods = () => {
    fetchGoods<GoodInterface>()
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

  getRedGoods = () => {
    fetchGoods<GoodInterface>()
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
        <button type="button" className="button" onClick={this.getAllGoods}>
          All
        </button>
        <button type="button" className="button" onClick={this.getFiveGoods}>
          5 first goods
        </button>
        <button type="button" className="button" onClick={this.getRedGoods}>
          red goods
        </button>
        {error
          ? (
            <div className="error">
              Ooops! Something went wrong, maybe try later
            </div>
          )
          : <GoodsList goods={goods} />}
      </div>
    );
  }
}

export default App;
