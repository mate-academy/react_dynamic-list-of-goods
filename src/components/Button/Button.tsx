import React, { FC } from 'react';

type Props = {
  clickHandler: () => void;
  children: string;
};

export const Button: FC<Props> = ({ clickHandler, children }) => (
  <button
    className="button"
    type="button"
    onClick={clickHandler}
  >
    {children}
  </button>
);
