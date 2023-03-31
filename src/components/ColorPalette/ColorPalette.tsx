import React from 'react';
import './ColorPalette.scss';
import { ColorItem } from '../ColorItem';

const colors = ['red', 'green', 'blue', 'red'];

type Props = {
  selectedColor: string;
  onColorChange: (newColor: string) => void;
};

export const ColorPalette: React.FC<Props> = (props) => {
  const {
    selectedColor,
    onColorChange,
  } = props;

  return (
    <div className="ColorPalette">
      <ul className="ColorPalette__list">
        {colors.map(color => (
          <li
            className="ColorPalette__item"
            key={color + Math.random()}
          >
            <ColorItem
              key={color}
              color={color}
              isSelected={color === selectedColor}
              onColorChange={onColorChange}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
