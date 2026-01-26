import React from 'react';

type Props = {
  type: 'submit' | 'reset' | 'button' | undefined;
  dataAttr: string;
  text: string;
  onClick: () => void;
};

export const Button: React.FC<Props> = ({ type, dataAttr, text, onClick }) => {
  return (
    <button type={type} data-cy={dataAttr} onClick={onClick}>
      {text}
    </button>
  );
};
