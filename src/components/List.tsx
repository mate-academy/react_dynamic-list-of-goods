import React, { FC } from 'react';
import ListItems from './ListItems';

interface Props {
  goods: Good[];
}


const List: FC<Props> = ({ goods }) => (
  <ul className="list">
    <ListItems goods={goods} />
  </ul>
);

export default List;
