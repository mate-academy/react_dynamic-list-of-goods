import React from 'react';

import { getGoods } from './Api';

type good = {id: number; name: string; color: string};

interface State {
  goods: good[];
}

export class GoodsList extends React.Component {
  state: State = {
    goods: [],
  };

  handleClick = (maxValue = Infinity, color?: string) => {
    getGoods().then(resolve => {
      const filteredArray = resolve.filter((good: good, index: number) => index < maxValue
        && good.color === (!color ? good.color : color));

      this.setState({ goods: filteredArray });
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <ul>
          {goods.map((good: good) => {
            const style = {
              color: good.color,
            };

            return (
              <li
                key={good.id}
                style={style}
              >
                {good.name}
              </li>
            );
          })}
        </ul>
        <button type="button" onClick={() => this.handleClick()}>
          Load All goods
        </button>
        <button type="button" onClick={() => this.handleClick(5)}>
          Load 5 first goods
        </button>
        <button type="button" onClick={() => this.handleClick(Infinity, 'red')}>
          Load red goods
        </button>
      </div>
    );
  }
}
