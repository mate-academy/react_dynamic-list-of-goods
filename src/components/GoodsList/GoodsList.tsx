import React from 'react';

type Props = {
  allGoods: Good[],
};

export class GoodsList extends React.Component<Props, {}> {
  state = {};

  render() {
    return (
      <ul>
        {this.props.allGoods.map(good => (
          <li
            key={good.id}
            style={{ color: good.color }}
          >
            {good.name}
          </li>
        ))}
      </ul>
    );
  }
}
