import React, { useState } from 'react';
import './ColorPicker.scss';
import classNames from 'classnames';

// const colors = ['red', 'green', 'blue'];

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
      className={classNames(
        'ColorPicker',
        {
          'ColorPicker--opened': isOpened,
        },
      )}
      onMouseOver={() => setIsOpened(true)}
      onMouseOut={() => setIsOpened(false)}
      onFocus={() => setIsOpened(true)}
      onBlur={() => setIsOpened(false)}
    >
      <div className="ColorPicker__opener">
        <span className="icon has-text-danger">
          <i className="ColorPicker__icon fas fa-2x fa-palette" />
        </span>
      </div>
      <div className="ColorPicker__list-container">
        <ul className="ColorPicker__list">
          <li
            className={classNames(
              'ColorPicker__color-container',
              {
                'ColorPicker__color-container--selected':
                  selectedColor === 'red',
              },
            )}
            role="menuitem"
            tabIndex={0}
            onClick={() => onColorChange('red')}
            onKeyDown={() => onColorChange('red')}
          >
            <div className="ColorPicker__item ColorPicker__item--color-red" />
          </li>
          <li
            className={classNames(
              'ColorPicker__color-container',
              {
                'ColorPicker__color-container--selected':
                  selectedColor === 'green',
              },
            )}
            role="menuitem"
            tabIndex={0}
            onClick={() => onColorChange('green')}
            onKeyDown={() => onColorChange('green')}
          >
            <div className="ColorPicker__item ColorPicker__item--color-green" />
          </li>
          <li
            className={classNames(
              'ColorPicker__color-container',
              {
                'ColorPicker__color-container--selected':
                  selectedColor === 'blue',
              },
            )}
            role="menuitem"
            tabIndex={0}
            onClick={() => onColorChange('blue')}
            onKeyDown={() => onColorChange('blue')}
          >
            <div className="ColorPicker__item ColorPicker__item--color-blue" />
          </li>
        </ul>
      </div>
    </div>
  );
};
