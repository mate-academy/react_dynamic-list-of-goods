import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
import './App.css';

const url = 'https://mate.academy/students-api/goods';

const fetchGoods = () => {
  return fetch(url)
    .then(response => response.json());
};

class App extends React.Component {
  state = {
    goods: [],
    error: false,
  };

  getAllGoods = () => {
    fetchGoods()
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
    fetchGoods()
      .then(response => {
        this.setState({
          goods: response.data.sort((a: { name: string }, b: { name: string }) => (
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
    fetchGoods()
      .then(response => {
        this.setState({
          goods: response.data.filter((item: { color: string }) => item.color === 'red'),
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
