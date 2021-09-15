import React from 'react';

interface Props {
  goods: Good[];
}

export class GoodsList extends React.Component<Props> {
  state = {};

  render() {
    return (
      <ul>
        {this.props.goods.map(item => (
          <li key={item.id} style={{ color: item.color }}>
            {item.name}
          </li>
        ))}
      </ul>
    );
  }
}
