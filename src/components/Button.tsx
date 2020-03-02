import React from 'react';

interface ButtonProps {
  text: string;
  handler(): void;
}

export const Button = (props: ButtonProps): JSX.Element => {
  const { text, handler } = props;

  return (
    <button
      type="button"
      onClick={handler}
    >
      {text}
    </button>
  );
};
