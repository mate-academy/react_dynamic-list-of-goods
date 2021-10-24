import * as React from 'react';

import { get5First, getAll, getRedGoods } from '../api/goods';

type State = {
  colors: Good[];
};

type Props = {
  type: 'fullColors' | 'firstFive' | 'redColors' | '';
};

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    colors: [],
  };

  async componentDidUpdate(prevProps: Props) {
    if (prevProps.type !== this.props.type) {
      const newColors = await this.pritNewColor();

      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ colors: [...newColors] });
    }
  }

  pritNewColor() {
    const { type } = this.props;

    switch (type) {
      case 'fullColors':
        return getAll();

      case 'firstFive':
        return get5First();

      case 'redColors':
        return getRedGoods();

      default:
        return [];
    }
  }

  render() {
    return (
      <ul>
        {this.state.colors.map(color => (
          <li key={color.id} style={color}>
            {color.name}
          </li>
        ))}
      </ul>
    );
  }
}
