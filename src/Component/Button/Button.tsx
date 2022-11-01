import { FC } from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <button
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};
