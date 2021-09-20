import React from 'react';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <div className="goods">
      {goods.length === 0
        ? <span className="goods-load">Press the button to start</span>
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
};
