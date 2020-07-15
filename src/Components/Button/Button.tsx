import React, { FC } from 'react';

type Props = {
  text: string;
  onClick: CallableFunction;
};

export const Button: FC<Props> = ({ text, onClick }) => (
  <button
    type="button"
    onClick={() => onClick()}
  >
    {text}
  </button>
);
