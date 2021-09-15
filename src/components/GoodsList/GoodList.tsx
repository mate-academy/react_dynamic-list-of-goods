import React from 'react';

type Props = {
  goods: Good[];
};
type State = {};

export class GoodsList extends React.Component<Props, State> {
  state: State = {};

  render() {
    const { goods } = this.props;

    return (
      <div>
        <ul className="list-group">
          {goods.map(good => (
            <li
              key={good.id}
              style={{ color: good.color }}
              className="list-group-item"
            >
              {good.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
