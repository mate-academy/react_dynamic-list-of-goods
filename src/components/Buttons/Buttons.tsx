import React, { FC } from 'react';
import { ButtonsData } from './ButtonData';

interface ButtonsProps {
  onFilter: (title: string) => void;
}

export const Buttons: FC<ButtonsProps> = ({ onFilter }) => (
  <>
    {ButtonsData.map(button => (
      <button
        onClick={() => onFilter(button.title)}
        key={button.title}
        type="button"
      >
        {button.title}
      </button>
    ))}
  </>
);
