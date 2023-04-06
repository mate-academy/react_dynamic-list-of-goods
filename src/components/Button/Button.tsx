import React from 'react';
import classNames from 'classnames';
import { ButtonType } from '../../types/ButtonType';

type Props = {
  dataCy: ButtonType,
  onClick: () => Promise<void>,
  clickedButton: ButtonType,
  children: React.ReactNode,
};

export const Button: React.FC<Props> = ({
  dataCy,
  onClick,
  clickedButton,
  children,
}) => {
  const isButtonActive = clickedButton === dataCy;

  return (
    <button
      type="button"
      data-cy={dataCy}
      onClick={onClick}
      className={classNames(
        'button is-light',
        {
          'is-warning': isButtonActive,
        },
      )}
    >
      {children}
    </button>
  );
};
