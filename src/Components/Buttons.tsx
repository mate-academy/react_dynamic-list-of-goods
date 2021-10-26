import React from 'react';

interface Props {
  loadAll: () => void;
  load5First: () => void;
  loadRed: () => void;
}
const Buttons:React.FC<Props> = ({ loadAll, load5First, loadRed }) => (
  <div className="app__buttons">
    <button className="app__btn" type="button" onClick={loadAll}>All Goods</button>
    <button className="app__btn" type="button" onClick={load5First}>First 5</button>
    <button className="app__btn" type="button" onClick={loadRed}>Only red</button>
  </div>
);

export default Buttons;
