import React, { FC } from 'react';
import './GoodList.css';

interface Props {
  goods: Good[];
  handleAllGoods: () => void;
  handleClickFive: () => void;
  handleRedGoods: () => void;
}

export const GoodsList: FC<Props> = (props) => {
  const {
    goods,
    handleAllGoods,
    handleClickFive,
    handleRedGoods,
  } = props;

  return (
    <>
      <div className="wrapper">
        <button
          type="button"
          className="button"
          onClick={handleAllGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          className="button"
          onClick={handleClickFive}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          className="button"
          onClick={handleRedGoods}
        >
          Load red goods
        </button>
      </div>
      <ul className="list">
        {Object.values(goods).map(good => (
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
};
