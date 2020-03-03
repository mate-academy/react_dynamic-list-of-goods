import React, { FC } from 'react';

interface Props {
  loadAllGoods: () => void;
  loadFiveFirstGoods: () => void;
  loadRedGoods: () => void;
}

export const Buttons: FC<Props> = ({
  loadAllGoods,
  loadFiveFirstGoods,
  loadRedGoods,
}: Props) => (
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
