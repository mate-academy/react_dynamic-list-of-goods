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
      .then((goods) => {
        this.setState({
          goods: [...goods]
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0, 5),
        });
      })
      .catch(() => this.setState({
        error: 'ERROR',
      }));
  }

  showAllGoods = () => {
    fetchGoods(API_URL)
      .then((goods) => {
        this.setState({
          goods: [...goods],
        });
      })
      .catch(() => this.setState({
        error: 'ERROR',
      }));
  };

  showOnlyRedGoods = () => {
    fetchGoods(API_URL)
      .then((goods) => {
        this.setState({
          goods: [...goods].filter(good => good.color === 'red'),
        });
      })
      .catch(() => this.setState({
        error: 'ERROR',
      }));
  }

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
