import React from 'react';

interface Props {
  loadAll: () => void;
  loadFirstFive: () => void;
  loadRedGoods: () => void;
}
const Buttons: React.FC<Props> = ({ loadAll, loadFirstFive, loadRedGoods }) => {
  return (
    <div className="container">
      <button
        className="button"
        type="button"
        onClick={() => loadAll()}
      >
        Load All goods
      </button>
      <button
        type="button"
        className="button"
        onClick={() => loadFirstFive()}
      >
        Load 5 first goods
      </button>
      <button
        className="button"
        type="button"
        onClick={() => loadRedGoods()}
      >
        Load red goods
      </button>
    </div>
  );
};

export default Buttons;
