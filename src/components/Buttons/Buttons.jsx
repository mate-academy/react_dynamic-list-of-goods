import React from 'react';
import { Button } from 'react-bootstrap';
import { get5First, getAll, getRedGoods } from '../../api/goods';

export const Buttons = ({ clickHandler }) => (
  <div className="buttons">
     <Button
        variant="primary"
        onClick={()=>clickHandler(getAll)}
      >
        Get all goods
      </Button>
      <Button
        variant="primary"
        onClick={()=>clickHandler(get5First)}
      >
        Get first 5 goods
      </Button>
      <Button
        variant="primary"
        onClick={()=>clickHandler(getRedGoods)}
      >
        Get red goods
      </Button>
  </div>
)