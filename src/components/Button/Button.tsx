import React from 'react';

interface Props {
  setAll: () => void;
  set5First: () => void;
  setRedGoods: () => void;
}

export const Button: React.FC<Props> = (props) => (
  <div className="btn-group d-flex">
    <button
      type="button"
      onClick={() => props.setAll()}
      className="btn btn-primary"
    >
      Load All goods
    </button>
    <button
      type="button"
      onClick={() => props.set5First()}
      className="btn btn-info"
    >
      Load 5 first goods
    </button>
    <button
      type="button"
      onClick={() => props.setRedGoods()}
      className="btn btn-danger"
    >
      Load red goods
    </button>
  </div>
);
