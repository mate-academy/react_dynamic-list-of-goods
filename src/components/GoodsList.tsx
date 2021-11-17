import React from 'react';

type Props = {
  goods: Good[];
};

export class GoodsList extends React.Component<Props, {}> {
  state = {};

  render() {
    const { goods } = this.props;

    return (
      <ul className="goods__list">
        {goods.map(good => (
          <li
            key={good.id}
            className="goodsItem"
          >
            <div className="goodsItem__preview" style={{ backgroundColor: good.color }} />
            <div className="goodsItem__title" style={{ color: good.color }}>{good.name}</div>
          </li>
        ))}
      </ul>
    );
  }
}
