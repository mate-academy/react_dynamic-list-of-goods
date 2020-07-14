import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { getData } from './api';
import { Good } from './interfaces';

interface State {
  goodsList: Good[];
}

export default class App extends React.Component<{}, State> {
  state = {
    goodsList: [],
  };

  loadAll = () => {
    getData()
      .then(response => {
        this.setState({
          goodsList: response.data,
        });
      });
  };

  loadFive = () => {
    getData()
      .then(response => {
        this.setState({
          goodsList: [...response.data]
            .sort((a, b) => (a.name.localeCompare(b.name)))
            .slice(0, 5),
        });
      });
  };

  loadRed = () => {
    getData()
      .then(response => {
        this.setState({
          goodsList: response.data.filter(item => item.color === 'red'),
        });
      });
  };

  render() {
    const { goodsList } = this.state;

    return (
      <div className="App">
        <h1>Goods List</h1>
        {!(goodsList.length) && (
          <>
            <button
              type="button"
              onClick={this.loadAll}
              className="App__btn"
            >
              Load Goods
            </button>
          </>
        )}
        {!!(goodsList.length) && (
          <>
            <GoodsList goodsList={goodsList} />
            <button
              type="button"
              onClick={this.loadAll}
              className="App__btn"
            >
              Load all goods
            </button>
            <button
              type="button"
              onClick={this.loadFive}
              className="App__btn"
            >
              Load first five goods
            </button>
            <button
              type="button"
              onClick={this.loadRed}
              className="App__btn"
            >
              Load red goods
            </button>
          </>
        )}
      </div>
    );
  }
}
