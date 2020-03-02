import React from 'react';
import ListItems from './ListItems';


const List: React.FC<{goods: Good[]}> = ({ goods }) => (
  <ul className="list">
    <ListItems goods={goods} />
  </ul>
);

export default List;
