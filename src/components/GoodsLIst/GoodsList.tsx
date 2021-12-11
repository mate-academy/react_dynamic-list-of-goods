import React from 'react';

type Props = {
  goods: Good[];
};

export class GoodsList extends React.PureComponent<Props> {
  render(): React.ReactNode {
    const { goods } = this.props;

    return goods.length > 0 && (
      <ul>
        {goods.map(({ id, name, color }) => (
          <li
            key={id}
            style={{ color: `${color}` }}
          >
            {name}
          </li>
        ))}
      </ul>
    );
  }
}
