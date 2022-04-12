import { FC, memo } from 'react';

import './LoadButton.scss';

interface Props {
  title: string,
  action: () => void,
}

export const LoadButton: FC<Props> = memo(({ title, action }) => {
  return (
    <button
      type="button"
      className="load-buttons__button"
      onClick={action}
    >
      {title}
    </button>
  );
});
