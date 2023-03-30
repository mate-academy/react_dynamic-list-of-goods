import React from 'react';
import './ColorPicker.scss';

// const colors = ['red', 'green', 'blue'];

export const ColorPicker: React.FC = () => {
  return (
    <div className="ColorPicker ColorPicker--closed">
      <div className="ColorPicker__opener">
        <span className="icon has-text-danger is-large">
          <i className="ColorPicker__icon fas fa-2x fa-palette" />
        </span>
      </div>
      <div className="ColorPicker__list-container">
        <ul className="ColorPicker__list">
          <li className="
            ColorPicker__color-container
            ColorPicker__color-container--selected"
          >
            <div className="ColorPicker__item ColorPicker__item--color-1" />
          </li>
          <li className="ColorPicker__color-container">
            <div className="ColorPicker__item ColorPicker__item--color-2" />
          </li>
          <li className="ColorPicker__color-container">
            <div className="ColorPicker__item ColorPicker__item--color-3" />
          </li>
        </ul>
      </div>
    </div>
  );
};
