import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList/GoodsList';
import './components/GoodsList/GoodsList.css';
import { goodsFromServer } from './api';

type State = {
  goods: Goods[];
  loadingError: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    loadingError: false,
  };

  errorMessage = <p>Sorry, no data here</p>;

  loadAllHandler = () => {
    goodsFromServer<Goods>()
      .then(response => {
        this.setState({
          goods: response.data,
        });
      })
      .catch(() => this.setState({ loadingError: true }));
  };

  loadFiveHandler = () => {
    goodsFromServer<Goods>()
      .then(response => {
        this.setState({
          goods: [...response.data].sort((a, b) => (
            a.name.localeCompare(b.name))).slice(0, 5),
        });
      })
      .catch(() => this.setState({ loadingError: true }));
  };

  loadRedHandler = () => {
    goodsFromServer<Goods>()
      .then(response => {
        this.setState({
          goods: [...response.data].filter(item => item.color === 'red'),
        });
      })
      .catch(() => this.setState({ loadingError: true }));
  };

  render() {
    const { goods, loadingError } = this.state;

    return (
      <>
        {loadingError
          ? this.errorMessage
          : (
            <section>
              <button
                className="good__button"
                type="button"
                onClick={this.loadAllHandler}
              >
                Load All goods
              </button>
              <button
                className="good__button"
                type="button"
                onClick={this.loadFiveHandler}
              >
                Load 5 first goods
              </button>
              <button
                className="good__button"
                type="button"
                onClick={this.loadRedHandler}
              >
                Load red goods
              </button>
              <GoodsList goods={goods} />
            </section>
          )}
      </>
    );
  }
}

export default App;
