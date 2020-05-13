import React from 'react';
import { SortButtons } from './SortButtons';
import { getGoods } from './Api';

interface Good {
  id: number;
  name: string;
  color: string;
}

type State = {
  goods: Good[];
};

export class GoodsList extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  handleClick = (maxValue = Infinity, color?: string) => {
    getGoods().then(resolve => {
      const filteredArray = resolve.filter((good: Good, index: number) => index < maxValue
        && good.color === (!color ? good.color : color));

      this.setState({ goods: filteredArray });
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
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
        <SortButtons handleClick={this.handleClick} />
      </div>
    );
  }
}
