import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CartButton extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <Link
        data-testid="shopping-cart-button"
        className="button-cart"
        to={ { pathname: '/CartPage', state: { cart } } }
      >
        <i className="fas fa-shopping-cart" />
        { cart.length > 0 ? <span className="count-cart">{ cart.length }</span> : null }
      </Link>
    );
  }
}

CartButton.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CartButton;
