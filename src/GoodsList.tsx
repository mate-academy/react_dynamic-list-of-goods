type Good = {
  id: number,
  name: string,
  color: string
};

type Props = {
  goods: Good[]
};

const GoodsList: React.FC <Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

export default GoodsList;
