import React from 'react';
import './ColorPalette.scss';
import { ColorItem } from '../ColorItem';

import { PALETTE_COLORS as colors } from '../../shared/constants';

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
