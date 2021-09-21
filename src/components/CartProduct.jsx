import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartProduct extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">
          { title }
        </h3>
        <h4 data-testid="shopping-cart-product-quantity"> 1 </h4>
      </div>
    );
  }
}

CartProduct.propTypes = {
  title: PropTypes.string.isRequired,
};
