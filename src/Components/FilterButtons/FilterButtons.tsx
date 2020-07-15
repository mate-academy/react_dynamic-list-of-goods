import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { FilterButtonsData } from './FilterButtonsData';
import { FilterPattern, SortPattern } from '../interfaces/interfaces';

interface FilterButtonsProps {
  onFilteredGoods: (callBack: FilterPattern, sorting?: SortPattern) => void;
}

export const FilterButtons: FC<FilterButtonsProps> = (props) => {
  return (
    <>
      {FilterButtonsData.map(button => (
        <Button
          onClick={() => props.onFilteredGoods(button.filterPattern, button.sortPattern)}
          key={button.title}
          type="button"
        >
          {button.title}
        </Button>
      ))}
    </>
  );
};
