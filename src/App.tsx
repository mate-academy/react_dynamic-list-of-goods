import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodsList';
import { fetchGoods } from './api/api';

interface State {
  goods: Good[];
  error: boolean;
}

class App extends React.Component {
  state: State = {
    goods: [],
    error: false,
  };

  getAllGoods = () => {
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

  getFiveGoods = () => {
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

  getRedGoods = () => {
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
          className="btn btn-primary"
          onClick={this.getAllGoods}
        >
          Get all goods
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.getFiveGoods}
        >
          Get 5 goods
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.getRedGoods}
        >
          Get only red
        </button>
        {error
          ? (
            <div className="alert alert-primary" role="alert">
              Ooops! Something went wrong, maybe try later
            </div>
          )
          : <GoodsList goods={goods} />}
      </div>
    );
  }
}

export default App;
