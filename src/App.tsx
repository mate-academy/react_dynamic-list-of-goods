import React from 'react';
import { getGoods } from './helpers/api';
import GoodsList from './components/GoodsList/GoodsList';
import './App.css';
import { IGood } from './models/IGood';
import { Button } from 'reactstrap';
import { Spinner } from 'reactstrap';


export default class App extends React.Component {
  state = {
    goods: [],
    isLoading: false
  }

  _getData = (dataReceiver:() => Promise<any>):any => {
    this.setState({
      isLoading: true
    });
    dataReceiver().finally(()=>{
      this.setState({
        isLoading: false
      });
    });
  }
  showAllGoods = (): Promise<void> => {
   return getGoods()
      .then((goodsFromServer) => {
        this.setState({
          goods: goodsFromServer as IGood[]
        });
      });
  };

  showFiveGoods = () => {
   return getGoods()
      .then(goodsFromServer => {
        this.setState({
          goods: [...goodsFromServer]
            .sort((a: IGood, b: IGood) => (a.name).localeCompare(b.name))
            .splice(0, 5),
        });
      });
  };

  showRedGoods = () => {
   return getGoods()
      .then((goodsFromServer) => {
        this.setState({ goods: goodsFromServer.filter((good: IGood) => good.color === 'red') });
      });
  };



  render() {
    const { goods, isLoading } = this.state;
    if (isLoading) {
      return <p> Is loading ... <Spinner size="sm" color="secondary" /></p>
    }

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <GoodsList goods={goods} />
        <Button outline color="info"
          type="button"
          onClick={()=> this._getData(this.showAllGoods)}
        >
          Load all
        </Button>
        <Button outline color="success"
          type="button"
          onClick={()=> this._getData(this.showFiveGoods)}
        >
          Load 5 goods
        </Button>
        <Button outline
          color="danger"
          type="button"
          onClick={()=> this._getData(this.showRedGoods)}
        >
          Load only red
        </Button>
      </>
    )
  }
}



