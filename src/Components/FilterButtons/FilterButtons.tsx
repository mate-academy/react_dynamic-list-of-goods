import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { FilterButtonsData } from './FilterButtonsData';
import { Pattern } from '../interfaces/interfaces';

interface FilterButtonsProps {
  onFilteredGoods: (callBack: Pattern) => void;
}

export const FilterButtons: FC<FilterButtonsProps> = (props) => {
  return (
    <>
      {FilterButtonsData.map(button => (
        <Button
          onClick={() => props.onFilteredGoods(button.filterPattern)}
          key={button.title}
          type="button"
        >
          {button.title}
        </Button>
      ))}
    </>
  );
};
