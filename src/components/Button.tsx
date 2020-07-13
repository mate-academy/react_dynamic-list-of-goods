import React from 'react';

interface ButtonProps {
  filter: string;
  title: string;
  loadGoods: Function;
}

export const Button: React.FC<ButtonProps> = ({
  filter, title, loadGoods,
}) => {
  return (
    <button
      type="button"
      className="waves-effect waves-light indigo accent-1 btn"
      onClick={() => loadGoods(filter)}
    >
      {title}
    </button>
  );
};
