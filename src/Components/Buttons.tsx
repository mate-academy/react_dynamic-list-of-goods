import React from 'react';

interface Props {
  loadAll: () => void;
  load_5_First: () => void;
  loadRed: () => void;
}
const Buttons:React.FC<Props> = ({ loadAll, load_5_First, loadRed }) => (
  <div className="app__buttons">
    <button className="app__btn" type="button" onClick={loadAll}>All Goods</button>
    <button className="app__btn" type="button" onClick={load_5_First}>First 5</button>
    <button className="app__btn" type="button" onClick={loadRed}>Only red</button>
  </div>
);

export default Buttons;
