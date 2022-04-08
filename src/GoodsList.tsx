import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: Good[],
};
type State = {};

export class GoodsList extends React.Component<Props, State> {
  state = {

  };

  render() {
    return (
      <ul className="GoodsList">
        {this.props.goods.map(good => (
          <li
            key={good.id}
            style={{
              color: good.color,
            }}
          >
            {good.name}
          </li>
        ))}
      </ul>
    );
  }
}
