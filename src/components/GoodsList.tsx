import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';
import './GoodsList.scss';

type Props = {
  goods: Good[];
};
type State = {};

export class GoodsList extends React.Component<Props, State> {
  state: State = {};

  render() {
    const { goods } = this.props;

    return (
      <div className="display-goods">
        {goods.length === 0
          ? <span className="display-goods__preload">Press the button to start</span>
          : (
            <ul className="list-group">
              {goods.map(good => (
                <li
                  className="list-group-item"
                  key={good.id}
                  style={{ color: good.color }}
                >
                  {good.name}
                </li>
              ))}
            </ul>
          )}
      </div>

    );
  }
}
