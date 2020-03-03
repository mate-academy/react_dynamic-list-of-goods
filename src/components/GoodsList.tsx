import React, { FC } from 'react';
import { Good } from '../interfaces';
import { Goods } from './Goods';

interface Props {
  goods: Good[];
  handleClickAllGoods: () => void;
  handleClickFirstFive: () => void;
  handleClickOnlyRed: () => void;
}

export const GoodsList: FC<Props> = (props) => {
  const {
    goods,
    handleClickAllGoods,
    handleClickFirstFive,
    handleClickOnlyRed,
  } = props;

  return (
    <>
      <div className="buttons">
        <button
          type="button"
          className="button is-success"
          onClick={handleClickAllGoods}
        >
          Load all goods
        </button>
        <button
          type="button"
          className="button is-link"
          onClick={handleClickFirstFive}
        >
          Load first five goods
        </button>
        <button
          type="button"
          className="button is-link"
          onClick={handleClickOnlyRed}
        >
          Load only red goods
        </button>
      </div>

      <div className="menu">
        <p className="menu-label">
          Goods
        </p>
        <Goods goods={goods} />
      </div>
    </>
  );
};
