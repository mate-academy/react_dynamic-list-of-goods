import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  setAll: () => void;
  set5First: () => void;
  setRedGoods: () => void;
}

export const Button: React.FC<Props> = (props) => (
  <>
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
      className="btn btn-warning"
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
  </>
);
