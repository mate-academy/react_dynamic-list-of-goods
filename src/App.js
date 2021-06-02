import React from 'react';

import './App.scss';

import PropTypes from 'prop-types';
import { getAll, getFiveFirst, getRed, getBlue, getGreen } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  showGoods = (callback) => {
    callback()
      .then(goods => this.setState({ goods }));
  }

  render() {
    return (
      <div>

        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={() => this.showGoods(getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => this.showGoods(getFiveFirst)}
        >
          Load 5 first goods
        </button>

        <button
          style={{ color: 'red' }}
          type="button"
          onClick={() => this.showGoods(getRed)}
        >
          Load red goods
        </button>

        <button
          style={{ color: 'blue' }}
          type="button"
          onClick={() => this.showGoods(getBlue)}
        >
          Load blue goods
        </button>

        <button
          style={{ color: 'green' }}
          type="button"
          onClick={() => this.showGoods(getGreen)}
        >
          Load green goods
        </button>
        {this.state.goods.length > 0 && <GoodsList goods={this.state.goods} />}
      </div>
    );
  }
}

const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        style={{ color: `${good.color}` }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

const goodsType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
});

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(goodsType),
};

GoodsList.defaultProps = {
  goods: [],
};

export default App;
