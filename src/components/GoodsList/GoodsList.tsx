import { Component } from 'react';

type Props = {
  goods: Good[],
};

export class GoodsList extends Component<Props> {
  state = {};

  render() {
    const { goods } = this.props;

    return (
      <ul>
        {goods.map((good: Good) => (
          <li
            key={good.name}
            style={{ color: good.color }}
          >
            {good.name}
          </li>
        ))}
      </ul>
    );
  }
}
