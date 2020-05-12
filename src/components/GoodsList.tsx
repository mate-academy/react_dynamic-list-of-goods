import React from 'react';

type GoodsListProps = {
  goods: Good[]
}

export const GoodsList: React.FC<GoodsListProps> = ({ goods }) => {
  return (
    <ul className="goodslist">
      {goods.map(good => {
        return (
        <li
          className="good"
          key={good.name}
          style={{color: `${good.color}`, }}
          >
            {good.name}
          </li>
        )
      })}
    </ul>
  )
}
