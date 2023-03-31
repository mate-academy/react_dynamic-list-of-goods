import React from 'react';
import classNames from 'classnames';
import './ColorItem.scss';

type Props = {
  color: string;
  isSelected: boolean;
  onColorChange: (newColor: string) => void;
};

export const ColorItem: React.FC<Props> = (props) => {
  const {
    color,
    isSelected,
    onColorChange,
  } = props;

  return (
    <div
      className={classNames(
        'ColorItem',
        {
          'ColorItem--selected': isSelected,
        },
      )}
      role="menuitem"
      tabIndex={0}
      onClick={() => onColorChange(color)}
      onKeyDown={() => onColorChange(color)}
    >
      <div
        className="ColorItem__color"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};
