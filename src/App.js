import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Button } from './components/Button';
import { GoodList } from './components/GoodList';

class App extends React.Component {
  state = {
    goods: [],
  }

 setGoods = async(getGoods) => {
   const actualGoods = await getGoods();

   this.setState({ goods: actualGoods });
 }

 render() {
   const { goods } = this.state;
   const { setGoods } = this;

   return (
     <>
       <h1>Dynamic list of Goods</h1>
       <Button
         onClick={() => setGoods(getAll)}
         text="Show all"
       />
       <Button
         onClick={() => setGoods(get5First)}
         text="Show First Five"
       />
       <Button
         onClick={() => setGoods(getRedGoods)}
         text="Show all Red"
       />
       <GoodList goods={goods} />
     </>
   );
 }
}

export default App;
