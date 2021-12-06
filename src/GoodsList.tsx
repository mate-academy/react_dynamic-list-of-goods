import React from 'react';

type Props = {
  list: Good[];
};

const GoodsList: React.FC<Props> = (props) => {
  const { list } = props;

  return (
    <ul>
      {list.map((item: Good) => (
        <li
          style={{ color: item.color }}
          key={item.id}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default GoodsList;
