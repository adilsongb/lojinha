import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartProduct extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.checkCounts();
  }

  handleClick(param) {
    const { count } = this.state;
    if (param) this.setState({ count: Number(count) + 1 });
    else if (count > 0) this.setState({ count: Number(count) - 1 });
  }

  checkCounts = () => {
    const { cart, product } = this.props;
    let amount = 0;
    cart.forEach((item) => {
      if (product.id === item.id) amount += 1;
    });
    this.setState({ count: amount });
  }

  render() {
    const {
      product: { id, title, price, thumbnail },
      product,
      decreaseProduct,
      increaseProduct,
      removeProduct,
    } = this.props;
    const { count } = this.state;
    return (
      <div style={ { border: '1px solid black' } }>
        <img src={ thumbnail } alt="foto-produto" />
        <h3 data-testid="shopping-cart-product-name">
          { title }
        </h3>
        <h5>{ `A unidade: R$ ${price}` }</h5>
        <button
          type="button"
          onClick={ () => removeProduct(id) }
        >
          X
        </button>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => {
            decreaseProduct(id, count);
            this.handleClick();
          } }
        >
          -
        </button>
        <h4 data-testid="shopping-cart-product-quantity">{ count }</h4>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => {
            increaseProduct(product);
            this.handleClick(true);
          } }
        >
          +
        </button>
      </div>
    );
  }
}

CartProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  decreaseProduct: PropTypes.func.isRequired,
  increaseProduct: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
};
