import React from 'react';
import PropTypes from 'prop-types';
import { getAll, get5First, getRedGoods } from '../api/goods';

export class Buttons extends React.Component {
  onAdd = (event) => {
    const { value } = event.target;
    const { addAllGoods } = this.props;

    if (value === 'allGoods') {
      addAllGoods(getAll);
    } else if (value === '5FirstGoods') {
      addAllGoods(get5First);
    } else if (value === 'redGoods') {
      addAllGoods(getRedGoods);
    }
  }

  render() {
    return (
      <div className="load-buttons">
        <button
          type="submit"
          value="allGoods"
          onClick={this.onAdd}
        >
          Load All goods
        </button>
        <button
          type="submit"
          value="5FirstGoods"
          onClick={this.onAdd}
        >
          Load 5 first goods
        </button>
        <button
          type="submit"
          value="redGoods"
          onClick={this.onAdd}
        >
          Load red goods
        </button>
      </div>
    );
  }
}

Buttons.propTypes = {
  addAllGoods: PropTypes.func.isRequired,
};
