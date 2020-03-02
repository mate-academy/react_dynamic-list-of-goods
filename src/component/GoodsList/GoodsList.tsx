import React from 'react';
// import { ButtonList } from '../ButtonList/ButtonList';

interface Goods {
  goodsFromServer: {id: number; name: string; color: string}[];
  originalGoodsFromServer?: {id: number; name: string; color: string}[];
  defaultSelect?: number;
}

export class GoodsList extends React.Component<Goods> {
  state = {
    goodsFromServer: this.props.goodsFromServer,
    // originalGoodsFromServer: this.props.goodsFromServer,
    // defaultSelect: 0,
  };

  updateData = (value: any): void => {
    this.setState({
      goodsFromServer: value,
      // defaultSelect: value2,
    });
  };

  render() {
    return (
      <>
        <ul>
          {
            this.state.goodsFromServer.map(goods => (
              <li key={goods.id}>{goods.name}</li>
            ))
          }
        </ul>

        {/*<ButtonList*/}
        {/*  goodsFromServer={this.state.goodsFromServer}*/}
        {/*  callbackUpdateData={this.updateData}*/}
        {/*  originalGoodsFromServer={this.state.originalGoodsFromServer}*/}
        {/*  defaultSelect={this.state.defaultSelect}*/}
        {/*/>*/}
      </>
    );
  }
}
