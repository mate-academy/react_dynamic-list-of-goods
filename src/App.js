import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  getList = async(list) => {
    const goods = await list();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <button
          type="button"
          onClick={() => this.getList(getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => this.getList(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.getList(getRed)}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </>
    );
  }
}

const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(({ id, name, color }) => (
      <li
        key={id}
        style={{ color }}
      >
        {name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default App;
