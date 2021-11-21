import React from 'react';

type Props = {
  goods: Good[]
};

type State = {};

export class GoodsList extends React.Component<Props, {}> {
  state: State = {};

  render() {
    const { goods } = this.props;

    return (
      <div>
        <ul>
          {goods.map(good => (
            <li
              key={good.id}
              style={{ color: `${good.color}` }}
            >
              {good.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
