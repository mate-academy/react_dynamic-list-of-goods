type Props = {
  content: string,
  dataCy: string,
  loadGoods: () => void,
  isLoading: boolean,
};

export const Button: React.FC<Props> = ({
  content,
  dataCy,
  loadGoods,
  isLoading,
}) => (
  <button
    type="button"
    data-cy={dataCy}
    onClick={loadGoods}
    disabled={isLoading}
  >
    {content}
  </button>

);
