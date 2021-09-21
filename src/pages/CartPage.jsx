import React from 'react';
import PropTypes from 'prop-types';
import CartProduct from '../components/CartProduct';

class CartPage extends React.Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { cart } = state;
    return (
      <div>
        <h2>Carrinho de Compras</h2>
        { cart.length > 0
          ? cart.map((product) => (
            <CartProduct
              key={ product.id }
              title={ product.title }
            />))
          : <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3> }
      </div>
    );
  }
}

CartPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cart: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
}.isRequired;

export default CartPage;
