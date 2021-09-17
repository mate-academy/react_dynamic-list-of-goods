import React from 'react';

type Props = {
  goods: Good[];
  goodsRed: Good[];
  goods5: Good[];
  getAllGoods: boolean;
  getAllRed: boolean;
  get5: boolean;
};

export const GoodsList: React.FC<Props> = (props) => {
  const {
    goods, goodsRed, goods5, getAllGoods, getAllRed, get5,
  } = props;

  let goodsPack: Good[] = [];

  if (getAllGoods) {
    goodsPack = goods;
  }

  if (getAllRed) {
    goodsPack = goodsRed;
  }

  if (get5) {
    goodsPack = goods5;
  }

  return (
    <table className="table">

      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Color</th>
        </tr>
      </thead>

      <tbody>
        {goodsPack.map(good => (
          <tr key={good.id}>
            <td>{good.id}</td>
            <td style={{ color: good.color }}>{good.name}</td>
            <td>{good.color}</td>
          </tr>
        ))}
      </tbody>

    </table>
  );
};
