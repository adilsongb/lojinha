import React from 'react';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    return (
      <Link data-testid="shopping-cart-button" to="/CartPage">
        <img src="https://cdn-icons-png.flaticon.com/512/633/633743.png" alt="Cart Icon" />
      </Link>
    );
  }
}

export default CartButton;
