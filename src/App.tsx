import React from 'react';
import './App.css';
import { Elements, State } from './interface';
import List from './List';

class App extends React.Component <{}, State> {
  state: State = {
    godsList: [],
    isLoad: false,
  };

  godsURL = 'https://mate.academy/students-api/goods';

  componentDidMount() {
    this.getAllGods();
  }

  getAllGods = () => {
    return fetch(this.godsURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          godsList: response.data,
          isLoad: true,
        });
      });
  };

  getFiveFirstGods = () => {
    return fetch(this.godsURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          godsList: response.data
            .sort((a: Elements, b: Elements) => a.name.localeCompare(b.name))
            .slice(0, 5),
          isLoad: true,
        });
      });
  };

  getAllRedGods = () => {
    return fetch(this.godsURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          godsList: response.data.filter((good: Elements) => good.color === 'red'),
          isLoad: true,
        });
      });
  };

  render() {
    const { godsList, isLoad } = this.state;

    if (isLoad) {
      return (
        <section className="godsList">
          <button
            type="button"
            onClick={this.getAllGods}
            className="godsList__button"
          >
            All
          </button>
          <button
            type="button"
            onClick={this.getFiveFirstGods}
            className="godsList__button"
          >
            5 first
          </button>
          <button
            type="button"
            onClick={this.getAllRedGods}
            className="godsList__button"
          >
            Red
          </button>
          <List godsList={godsList} />
        </section>
      );
    }

    return (
      <section className="godsList">
        <h1>Please, wait</h1>
      </section>
    );
  }
}

export default App;
