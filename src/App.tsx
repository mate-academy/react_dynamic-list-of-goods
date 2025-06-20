import React, {useState, useEffect} from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good'


export default function App() {
  const [type, setType] = useState<string>("all")
  const [goods, setGoods] = useState<Good[]>([])

  useEffect(() => {
    const fetchGoods = async () => {
      const result = await (async () => {
        switch(type) {
          default:
            return await getAll()
          case "5first":
            return await get5First()
          case "getred":
            return await getRedGoods();
        }
      })();
      setGoods(result);
    };
    fetchGoods();
  }, [type]);


  return (
    <div className="App">
    <h1>Dynamic list of Goods</h1>

    <button onClick={() => setType("all")} type="button" data-cy="all-button">
      Load all goods
    </button>

    <button onClick={() => setType("5first")} type="button" data-cy="first-five-button">
      Load first five
    </button>

    <button onClick={() => setType("getred")} type="button" data-cy="red-button">
      Load red goods
    </button>
    <GoodsList goods={goods} />
  </div>
  )
}
