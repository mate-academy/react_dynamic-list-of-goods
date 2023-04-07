import React from 'react';

type Props = {
  text: string,
  dataCy: string,
  handleClick: () => void,
};

export const Button: React.FC<Props> = ({
  text,
  dataCy,
  handleClick,
}) => (
  <button
    className="button is-link"
    type="button"
    data-cy={dataCy}
    onClick={handleClick}
  >
    {text}
  </button>
);
