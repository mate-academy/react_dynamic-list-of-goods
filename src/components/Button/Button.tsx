import React from 'react';

interface Props {
  text: string;
  onLoad: (loadQuery?: () => Promise<Good[]>) => void;
}

export const Button: React.FC<Props> = (props) => {
  const { text, onLoad } = props;

  return (
    <button
      type="button"
      onClick={() => onLoad()}
      className="btn btn-primary"
    >
      {text}
    </button>
  );
};
