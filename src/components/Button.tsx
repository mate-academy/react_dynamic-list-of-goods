import React, { ButtonHTMLAttributes } from 'react';

type ItemProps = {
  data: string;
  text: string;
  getFromApi: string;
};

const items: ItemProps[] = [
  {
    data: 'all-button',
    text: 'Load all goods',
    getFromApi: 'ALL',
  },
  {
    data: 'first-five-button',
    text: 'Load 5 first goods',
    getFromApi: 'FIVE',
  },
  {
    data: 'red-button',
    text: 'Load red goods',
    getFromApi: 'RED',
  },
];

type Props = {
  onClick: (action: string) => void;
  rest?: ButtonHTMLAttributes<HTMLButtonElement>;
};

const ButtonComponent: React.FC<Props> = ({ onClick, rest }: Props) => {
  return (
    <>
      {items.map(({ data, text, getFromApi }: ItemProps) => (
        <button
          key={data}
          type="button"
          data-cy={data}
          {...rest}
          onClick={() => onClick(getFromApi)}
        >
          {text}
        </button>
      ))}
    </>
  );
};

export default ButtonComponent;
