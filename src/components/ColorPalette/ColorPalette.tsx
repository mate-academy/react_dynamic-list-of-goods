import React from 'react';
import './ColorPalette.scss';
import { Color } from '../../types/Color';
import { ColorItem } from '../ColorItem';

const colors: Color[] = [
  { id: 1, keyword: 'red' },
  { id: 2, keyword: 'green' },
  { id: 3, keyword: 'blue' },
  // { id: 4, keyword: 'aqua' },
  // { id: 5, keyword: 'orange' },
];

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
      <ul
        className="ColorPalette__list"
        role="menu"
      >
        {colors.map(color => (
          <li
            className="ColorPalette__item"
            key={color.id}
          >
            <ColorItem
              color={color}
              isSelected={color.keyword === selectedColor}
              onColorChange={onColorChange}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
