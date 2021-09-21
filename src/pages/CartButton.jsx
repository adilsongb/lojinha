import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CartButton extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <Link
        data-testid="shopping-cart-button"
        to={ { pathname: '/CartPage', state: { cart } } }
      >
        <i className="fas fa-shopping-cart" />
      </Link>
    );
  }
}

CartButton.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CartButton;
