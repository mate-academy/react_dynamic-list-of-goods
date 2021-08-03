import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Button } from './components/Button';
import { GoodList } from './components/GoodList';

class App extends React.Component {
  state = {
    goods: [],
  }

 getGoods = async(method) => {
   const actualGoods = await method();

   this.setState({ goods: actualGoods });
 }

 render() {
   const { goods } = this.state;
   const { getGoods } = this;

   return (
     <>
       <h1>Dynamic list of Goods</h1>
       <Button
         onClick={() => getGoods(getAll)}
         text="Show all"
       />
       <Button
         onClick={() => getGoods(get5First)}
         text="Show First Five"
       />
       <Button
         onClick={() => getGoods(getRedGoods)}
         text="Show all Red"
       />
       <GoodList goods={goods} />
     </>
   );
 }
}

export default App;
