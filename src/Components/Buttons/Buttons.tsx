import React from 'react';

interface ButtonsProps {
  loadAllGoods: () => void;
  loadFiveFirstGoods: () => void;
  loadRedGoods: () => void;
}

export const Buttons = ({ loadAllGoods, loadFiveFirstGoods, loadRedGoods }: ButtonsProps) => (
  <>
    <button
      type="button"
      onClick={loadAllGoods}
    >
      Load All goods
    </button>
    <button
      type="button"
      onClick={loadFiveFirstGoods}
    >
      Load 5 first goods
    </button>
    <button
      type="button"
      onClick={loadRedGoods}
    >
      Load red goods
    </button>
  </>
);
