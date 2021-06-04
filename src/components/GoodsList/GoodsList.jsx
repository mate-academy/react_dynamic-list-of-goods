import React from 'react';
import './GoodsList.scss';

import { getAll, get5First, getRedGoods } from '../../api/goods';

class GoodsList extends React.Component {
  state = {
    goods: null,
  };

  getAllGoods = () => {
    getAll()
      .then(goods => this.setState({ goods }));
  }

  get5FirstOnly = () => {
    get5First()
      .then(goods => this.setState({ goods }));
  }

  getRedOnly = () => {
    getRedGoods()
      .then(goods => this.setState({ goods }));
  }

  render() {
    return (
        <div>
        <button
          type="button"
          onClick={this.getAllGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.get5FirstOnly}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.getRedOnly}
        >
          Load red goods
        </button>
        {this.state.goods && (
          <ul>
            {this.state.goods.map(
              good => (
                <li
                  key={good.id}
                  className={good.color}
                >
                  {good.name}
                  {' '}
                  {good.color}
                </li>
              )
            )}
          </ul>
        )}
      </div>
    );
  }
}

export default GoodsList;
