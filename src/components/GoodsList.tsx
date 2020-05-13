import React from 'react';
import { getGoods } from '../helpers/api';

interface Good {
  id: number;
  name: string;
  color: string;
}

class GoodsList extends React.Component {
  state = {
    goods: [],
  };

  handleClick = () => {
    getGoods().then(data => {
      this.setState({ goods: data });
    });
  };

  getSomeGoods = () => {
    getGoods().then(data => {
      this.setState(
        {
          goods: data
            .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
            .slice(0, 5),
        },
      );
    });
  };

  getRedGoods = (color: string) => {
    getGoods().then(data => {
      this.setState(
        {
          goods: data.filter((good: Good) => good.color === color),
        },
      );
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <ul>
          {goods.map((good: Good) => {
            const goodStyle = {
              color: good.color,
            };

            return (
              <li
                key={good.id}
                style={goodStyle}
              >
                {good.name}
              </li>
            );
          })}
        </ul>
        <button type="button" onClick={() => this.handleClick()}>
          Load All goods
        </button>
        <button type="button" onClick={() => this.getSomeGoods()}>
          Load 5 first goods
        </button>
        <button type="button" onClick={() => this.getRedGoods('red')}>
          Load red goods
        </button>
      </>
    );
  }
}

export default GoodsList;
