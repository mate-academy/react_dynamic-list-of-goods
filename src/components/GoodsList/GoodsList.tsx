import React from 'react';
import { Good } from '../../types/Good';
import '@fortawesome/fontawesome';
import 'bulma';

type Props = {
  goods: Good[];
  loadingError: boolean;
  setLoadingError: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GoodsList: React.FC<Props> = ({
  goods,
  loadingError,
  setLoadingError,
}) => {
  return (
    <>
      {loadingError
        ? (
          <div className="notification is-danger is-light error">
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              className="delete"
              type="button"
              onClick={() => setLoadingError(false)}
            />
            {/* eslint-disable-next-line max-len */}
            Loading error. Close this message to proceed from last successful state or try to reload entire tab.
          </div>
        )
        : (
          <ul className="list m-5">
            {goods.map(({ id, color, name }) => (
              <li
                key={id}
                data-cy="good"
                style={{ color }}
                className="m-1 is-size-5 good"
              >
                {name}
              </li>
            ))}
          </ul>
        )}
    </>
  );
};
