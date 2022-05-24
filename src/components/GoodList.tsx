import React from "react";

type Props = {
  goods: Good[];
};

export const GoodList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="GoodList">
      {goods.map(({ id, name, color }) => (
        <li key={id} style={{ color }}>{name}</li>
      ))}
    </ul>
  );
};
