import React from 'react';

interface Props {
  handleAll: () => void;
  handleFive: () => void;
  handleRed: () => void;
}

const Actions: React.FC<Props> = ({ handleAll, handleFive, handleRed }) => {
  return (
    <div className="actions">
      <button className="actions__button" type="button" onClick={handleAll}>All</button>
      <button className="actions__button" type="button" onClick={handleFive}>5 first</button>
      <button className="actions__button" type="button" onClick={handleRed}>Red only</button>
    </div>
  );
};


export default Actions;
