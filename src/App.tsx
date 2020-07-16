import React from 'react';
import './App.css';
import { Goods } from './components/Goods/Goods';

const App: React.FC = () => (
  <>
    <h1>Dynamic list of Goods</h1>
    <Goods />
  </>
);

export default App;
