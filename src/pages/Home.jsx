import React, { Component } from 'react';
import CartButton from './CartButton';

export default class Home extends Component {
  render() {
    return (
      <div>
        <CartButton />
        <input type="text" id="" />
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </div>
    );
  }
}
