type Props = {
  goods: Good[]
};

export const GoodList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(({ id, color, name }) => (
      <li id={String(id)} style={{ color }}>{name}</li>
    ))}
  </ul>
);
