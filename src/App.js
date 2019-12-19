import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

// eslint-disable-next-line max-len
const URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

class App extends React.Component {
  state = {
    goods: [],
    error: '',
  };

  render() {
    const { goods, error } = this.state;
    const loadAllGoods = () => {
      fetch(URL)
        .then(response => response.json())
        .then((goodsFromServer) => {
          this.setState({
            goods: goodsFromServer,
          });
        })
        .catch(() => this.setState({
          error: 'ERROR',
        }));
    };

    const load5FirstSortedGoods = () => {
      fetch(URL)
        .then(response => response.json())
        .then((goodsFromServer) => {
          this.setState({
            goods: [...goodsFromServer]
              .sort((a, b) => a.name.localeCompare(b.name))
              .slice(0, 5),
          });
        })
        .catch(() => this.setState({
          error: 'ERROR',
        }));
    };

    const loadRedGoods = () => {
      fetch(URL)
        .then(response => response.json())
        .then((goodsFromServer) => {
          this.setState({
            goods: goodsFromServer
              .filter(good => good.color === 'red'),
          });
        })
        .catch(() => this.setState({
          error: 'ERROR',
        }));
    };

    return (
      <div className="App">
        {error && <span style={{ color: 'red' }}>{error}</span>}
        <h1>Goods</h1>

        <button type="button" onClick={loadAllGoods}>
          Load all goods
        </button>

        <button type="button" onClick={load5FirstSortedGoods}>
          Load 5 first goods
        </button>

        <button type="button" onClick={loadRedGoods}>
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(
      ({ id, name, color }) => (
        <li key={id} style={{ color }}>
          {name}
        </li>
      )
    )}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
