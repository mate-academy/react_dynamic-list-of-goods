import React from 'react';

type Props = {
  goods: Good[];
};

export class GoodsList extends React.PureComponent <Props, {}> {
  render() {
    return (
      <ul>
        {this.props.goods.map(good => (
          <li key={good.id} style={{ color: good.color }}>
            {good.name}
          </li>
        ))}
      </ul>
    );
  }
}
