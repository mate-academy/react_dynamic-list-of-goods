import React from 'react';

type Props = {
  children: string,
  action: () => void,
  data: string,
};

export const Button: React.FC<Props> = ({ children, action, data }) => {
  return (
    <button
      type="button"
      data-cy={data}
      onClick={action}
    >
      {children}
    </button>
  );
};
