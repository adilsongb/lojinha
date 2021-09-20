import React from 'react';

class CartPage extends React.Component {
  render() {
    return (
      <div>
        <h2>Carrinho de Compras</h2>
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
      </div>
    );
  }
}

export default CartPage;
