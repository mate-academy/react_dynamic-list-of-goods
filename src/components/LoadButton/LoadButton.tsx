import React from 'react';
import classNames from 'classnames';

import { Good } from '../../types/Good';
import { LoadButtonSettings } from '../../classes/LoadButtonSettings';

type Props = {
  settings: LoadButtonSettings;
  isCurrentMode: boolean;
  isLoading: boolean;
  load: (
    callback: () => Promise<Good[]>,
    namePart: string,
  ) => Promise<void>;
};

export const LoadButton: React.FC<Props> = ({
  settings,
  isCurrentMode,
  isLoading,
  load,
}) => {
  const {
    namePart,
    dataCyPrefix,
    onClickCallback,
  } = settings;

  return (
    <button
      key={namePart}
      type="button"
      className={classNames(
        'button',
        'is-info',
        { 'is-light': !isCurrentMode },
        { 'is-loading': isCurrentMode && isLoading },
      )}
      data-cy={`${dataCyPrefix}-button`}
      onClick={() => {
        load(onClickCallback, namePart);
      }}
    >
      {`Load ${namePart} goods`}
    </button>
  );
};
