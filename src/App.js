import React from 'react';
import './App.css';
import fetchGoods from './goodApi';
import GoodsList from './GoodsList';
import Buttons from './Buttons';

const API_URL
  = 'https://mate-academy.github.io/'
  + 'react_dynamic-list-of-goods/goods.json';

class App extends React.Component {
  state = {
    goods: [],
    isStarted: false,
    error: '',
  };

  showFirstFiveGoods = () => {
    fetchGoods(API_URL)
      .then((data) => {
        const visibleGoods = data
          .sort((a, b) => a.name.localeCompare(b.name))
          .slice(0, 5);

        this.setState(prevState => ({
          goods: [...visibleGoods],
        }));
      })
      .catch(() => this.setState(prevState => ({
        error: 'ERROR',
      })));
  };

  showAllGoods = () => {
    fetchGoods(API_URL)
      .then((data) => {
        const visibleGoods = data;

        this.setState(prevState => ({
          goods: [...visibleGoods],
        }));
      })
      .catch(() => this.setState(prevState => ({
        error: 'ERROR',
      })));
  };

  showOnlyRedGoods = () => {
    fetchGoods(API_URL)
      .then((data) => {
        const visibleGoods = data.filter(good => good.color === 'red');

        this.setState(prevState => ({
          goods: [...visibleGoods],
        }));
      })
      .catch(() => this.setState(prevState => ({
        error: 'ERROR',
      })));
  };

  render() {
    const { isStarted, goods, error } = this.state;

    return (
      <div className="App">
        <h1 className="title">List of goods</h1>
        {error && <span style={{ color: 'red' }}>{error}</span>}
        {isStarted ? (
          <div>
            <Buttons
              showOnlyRedGoods={this.showOnlyRedGoods}
              showAllGoods={this.showAllGoods}
              showFirstFiveGoods={this.showFirstFiveGoods}
            />
            <div className="table">
              <GoodsList visibleGoods={goods} />
            </div>
          </div>
        ) : (
          <button
            onClick={() => this.setState({ isStarted: true })}
            className="button"
            type="button"
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
