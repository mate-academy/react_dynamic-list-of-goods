interface Props {
  goods: Good[],
}

export const GoodsList: React.FC<Props> = ({
  goods,
}: Props) => {
  return (
    <div>
      <ul className="products__list">
        {goods.map((good) => (
          <li key={good.id} style={{ color: good.color }}>
            {good.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
