import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: Good[],
};

export class GoodsList extends React.Component<Props> {
  state = {};

  render() {
    const { goods } = this.props;

    return (
      <ul className="Goods__list">
        {goods.map(({ id, color, name }) => (
          <li
            className="Goods__item"
            key={id}
            style={{ color }}
          >
            {name}
          </li>
        ))}
      </ul>
    );
  }
}
