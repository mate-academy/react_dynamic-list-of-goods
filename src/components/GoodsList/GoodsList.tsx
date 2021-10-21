import React from 'react';
import { Button } from '../Button/Button';

type Props = {
  onAll: () => Promise<Good[]>;
  on5First: () => Promise<Good[]>;
  onRed: () => Promise<Good[]>;
};

type State = {
  visibleGoods: Good[];
};

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    visibleGoods: [],
  };

  showAll = async () => {
    this.setState({
      visibleGoods: await this.props.onAll(),
    });
  };

  show5First = async () => {
    this.setState({
      visibleGoods: await this.props.on5First(),
    });
  };

  showRed = async () => {
    this.setState({
      visibleGoods: await this.props.onRed(),
    });
  };

  render() {
    const { visibleGoods } = this.state;

    return (
      <>
        <Button
          name="Show All"
          callback={this.showAll}
        />
        <Button
          name="Show first 5"
          callback={this.show5First}
        />
        <Button
          name="Show red"
          callback={this.showRed}
        />
        <ul className="GoodsList content is-large">
          {visibleGoods.map(good => (
            <li
              key={good.id}
              style={{ color: good.color }}
            >
              {good.name}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
