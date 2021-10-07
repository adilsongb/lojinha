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
      <div className="cart-product">
        <button
          type="button"
          className="button-remove-product"
          onClick={ () => removeProduct(id) }
        >
          <i className="fas fa-times" />
        </button>
        <div className="details-product-cart">
          <div className="container-img-cart">
            <img src={ thumbnail } alt="foto-produto" />
          </div>
          <h4 className="title-product" data-testid="shopping-cart-product-name">
            { title }
          </h4>
        </div>
        <div className="count-result-product">
          <div className="control-product">
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
          <span className="price-total">{ `R$ ${price * count}` }</span>
          <span className="price-unit">{ `A unidade: R$ ${price}` }</span>
        </div>
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
