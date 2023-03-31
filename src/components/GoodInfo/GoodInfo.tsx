import React, { useState } from 'react';
import { Good } from '../../types/Good';
import './GoodInfo.scss';
import { ColorPicker } from '../ColorPicker';

type Props = {
  good: Good;
};

export const GoodInfo: React.FC<Props> = ({ good }) => {
  const [selectedColor, setSelectedColor] = useState(good.color);

  return (
    <li
      className="box is-blue py-3 has-text-weight-medium has-border-grey"
      data-cy="good"
      style={{ color: selectedColor }}
    >
      <div
        className="has-text-centered is-relative"
        style={{ zIndex: 10 - good.id }}
      >
        <p>{good.name}</p>
        <div className="is-absolute is-x-right-y-center">
          <ColorPicker
            selectedColor={selectedColor}
            onColorChange={setSelectedColor}
          />
        </div>
      </div>
    </li>
  );
};
