import React from 'react';

interface Props {
  name: string,
  callback: () => void,
}

export const Button: React.FC<Props> = ({ name, callback }) => {
  return (
    <button
      type="button"
      onClick={callback}
    >
      {name}
    </button>
  );
};
