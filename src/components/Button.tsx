import React from 'react';

interface Props {
  text: string;
  action: () => Promise<void | null>;
  className: string;
}

export const Button: React.FC<Props> = (props) => {
  const { text, action, className } = props;

  return (
    <button
      type="button"
      onClick={action}
      className={className}
    >
      {text}
    </button>
  );
};
