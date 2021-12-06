import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: Good[],
};

export class GoodsList extends React.Component<Props> {
  state = {

  };

  render() {
    const { goods } = this.props;

    return (
      <ul>
        {goods.map(item => (
          <li
            key={item.id}
            style={{ color: item.color }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    );
  }
}
