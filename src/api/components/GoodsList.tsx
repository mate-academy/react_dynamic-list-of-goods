import React from 'react';
import { getAll, get5First, getRedGoods } from '../FetchFunctions';

interface State {
  goods: Good[];
}

interface Props {
  listType: string;
}

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    goods: [],
  };

  render() {
    const { goods } = this.state;

    switch (this.props.listType) {
      case 'red':
        getRedGoods().then(result => this.setState({ goods: result }));
        break;

      case 'first five':
        get5First().then(result => this.setState({ goods: result }));
        break;

      case 'all':
        getAll().then(result => this.setState({ goods: result }));
        break;

      default:
        break;
    }

    return (
      goods
        ? (
          <ul>
            {goods.map(el => (
              <li
                key={el.id}
                style={{ color: el.color }}
              >
                {el.name}
              </li>
            ))}
          </ul>
        )
        : <h2>No goods loaded so far</h2>
    );
  }
}

export default GoodsList;
