import React, { FC } from 'react';

interface Props {
  handleClickAllGoods: () => void;
  handleClickFirstFive: () => void;
  handleClickOnlyRed: () => void;
}

export const GoodsListButtons: FC<Props> = (props) => {
  const {
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
    </>
  );
};
