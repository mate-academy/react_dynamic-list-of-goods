import React, { FC } from 'react';

interface Props {
  onAll: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onFive: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onRed: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const FilterButtons: FC<Props> = (props) => {
  const { onAll, onFive, onRed } = props;

  return (
    <div className="btn-group" role="group">
      <button type="button" className="btn btn-success" onClick={onAll}>All</button>
      <button type="button" className="btn btn-secondary" onClick={onFive}>First five</button>
      <button type="button" className="btn btn-danger" onClick={onRed}>Color red</button>
    </div>
  );
};
