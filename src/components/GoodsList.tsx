import React from 'react';

interface Props {
  goods: Good[];
}

export class GoodsList extends React.Component<Props> {
  state = {};

  render() {
    return (
      <ul>
        {this.props.goods.map(good => (
          <li key={good.id} style={{ color: `${good.color}` }}>
            {good.name}
          </li>
        ))}
      </ul>
    );
  }
}
