import React from 'react';

type ButtonProps = {
  title: string
  filterName: string
  loadGoods: (filterName: string) => void
}

export const Button: React.FC<ButtonProps> = ({
  filterName,
  title,
  loadGoods
}) => {
  return (
    <button
      type="button"
      className="waves-effect waves-light btn-large mx1"
      onClick={() => loadGoods(filterName)}
    >
      {title}
    </button>
  )
}
