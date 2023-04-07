import { ButtonHTMLAttributes, FC } from 'react';
import './Button.scss';

type Attributes = ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends Attributes {
  title: string;
}

export const Button: FC<ButtonProps> = ({
  title,
  ...props
}) => (
  <button
    {...props}
    type="button"
    className="button"
  >
    {title}
  </button>
);
