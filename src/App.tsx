import React, { useState } from 'react';
import { getGoods } from './helpers/api';
import { IGoodsItem } from './helpers/interfaces';
import { FILTERS } from './helpers/filters';
import { GoodsList } from './components/GoodsList';
import './App.css';

const App: React.FC = () => {
  const [goods, setGoods] = useState<IGoodsItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function loadGoods(filterName: string) {
    try {
      const goods = await getGoods();
      setIsLoading(true);

      setTimeout(() => {
        switch (filterName) {
          case 'firstFive':
            setGoods([...goods]
              .sort((a, b) => a.name.localeCompare(b.name))
              .slice(0, 5));
            break;

          case 'redOnly':
            setGoods(goods
              .filter((goodsItem: IGoodsItem) => goodsItem.color === 'red'));
            break;

          default:
            setGoods(goods);
            break;
        }

        setIsLoading(false);
      }, 1000);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <div className="row center-align">
        {FILTERS.map(({ id, name, title }) => (
          <button
            key={id}
            type="button"
            className="waves-effect waves-light btn-large mx1"
            onClick={() => loadGoods(name)}
          >
            {title}
          </button>
        ))}
      </div>
      {isLoading ? (
        <div className="row center-align">
          <div className="preloader-wrapper small active">
            <div className="spinner-layer spinner-green-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
        ) : (
          <div className="row">
            <div className="col s6 offset-s3">
              <GoodsList goods={goods}/>
            </div>
          </div>
        )}
    </div>
  );
};

export default App;
