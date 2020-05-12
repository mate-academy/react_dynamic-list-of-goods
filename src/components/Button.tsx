import React from 'react';

interface Props {
  title: string;
  handleClick: Function;

}
export const Button: React.FC<Props> = ({ title, handleClick }) => {
  return (
    <button
      type="button"
      className="btn btn-outline-dark"
      onClick={() => handleClick()}
    >
      {title}
    </button>
  );
};
