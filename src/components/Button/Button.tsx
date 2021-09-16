import React from 'react';

type Props = {
  name: string;
  callback: () => void;
};

export const Button: React.FC<Props> = (props) => {
  const { name, callback } = props;

  return (
    <button
      type="button"
      className="button is-light column is-fullwidth"
      onClick={callback}
    >
      {name}
    </button>
  );
};
