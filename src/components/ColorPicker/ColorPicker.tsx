import React, { useState } from 'react';
import './ColorPicker.scss';
import classNames from 'classnames';
import { ColorPalette } from '../ColorPalette';

type Props = {
  selectedColor: string;
  onColorChange: (newColor: string) => void;
};

export const ColorPicker: React.FC<Props> = (props) => {
  const {
    selectedColor,
    onColorChange,
  } = props;

  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className="ColorPicker"
      onMouseEnter={() => setIsOpened(true)}
      onMouseLeave={() => setIsOpened(false)}
    >
      <div className="ColorPicker__opener">
        <span className="icon has-text-danger">
          <i className="ColorPicker__icon fas fa-2x fa-palette" />
        </span>
      </div>

      <div
        className={classNames(
          'ColorPicker__dropdown',
          {
            'ColorPicker__dropdown--opened': isOpened,
          },
        )}
      >
        {isOpened && (
          <ColorPalette
            selectedColor={selectedColor}
            onColorChange={onColorChange}
          />
        )}
      </div>
    </div>
  );
};
