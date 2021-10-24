type Props = {
  goodsList: Good[];
};

export const GoodsList: React.FC<Props> = ({ goodsList }) => {
  return (
    <ul>
      {goodsList.map((good: Good) => (
        <li key={good?.id} style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ul>
  );
};
