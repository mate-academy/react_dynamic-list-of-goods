import { FC } from 'react';
import { Button } from '@mui/material';

interface Props {
  dataCy: string,
  children: React.ReactNode,
  onClick: () => void
}

export const FilterButton: FC<Props> = (props) => {
  const { dataCy, children, onClick } = props;

  return (
    <Button
      variant="outlined"
      type="button"
      data-cy={dataCy}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
