import React from 'react';

interface Props {
  showAll: () => void;
  show5First: () => void;
  showRedGoods: () => void;
}

export const Buttons: React.FC<Props> = (props) => {
  const { showAll, show5First, showRedGoods } = props;

  return (
    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
      <button type="button" className="btn btn-warning" onClick={showAll}>Load All goods</button>
      <button type="button" className="btn btn-success" onClick={show5First}>Load 5 first goods</button>
      <button type="button" className="btn btn-danger" onClick={showRedGoods}>Load red goods</button>
    </div>
  );
};
