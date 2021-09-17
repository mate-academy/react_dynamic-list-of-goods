import React from 'react';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <>
      <ul className="d-flex flex-column justify-content-center align-items-center">
        {goods.map(good => (
          <li
            className="border border-secondary rounded py-1 mb-1 w-25 text-center"
            key={good.id}
            style={{ color: good.color }}
          >
            {good.name}
          </li>
        ))}
      </ul>
    </>
  );
};
