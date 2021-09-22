import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartButton from './CartButton';

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.loadStorage();
  }

  addToCart = () => {
    const { props } = this;
    const { state } = props.location;
    const { produto } = state;
    const { cart } = this.state;
    this.setState({ cart: [...cart, produto] },
      () => {
        const { cart: cartItem } = this.state;
        localStorage.setItem('cartItens', JSON.stringify(cartItem));
      });
  }

  loadStorage = async () => {
    const storage = localStorage.getItem('cartItens');
    const parseStorage = await JSON.parse(storage);
    this.setState({ cart: parseStorage });
  }

  render() {
    const { props } = this;
    const { state } = props.location;
    const { produto } = state;
    const { cart } = this.state;
    const { id, title, price, thumbnail } = produto;
    return (
      <div>
        <h1 data-testid="product-detail-name">
          {title}
        </h1>
        <p>{thumbnail}</p>
        <p>{id}</p>
        <p>{price}</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addToCart }
        >
          Adicionar ao Carrinho
        </button>
        <CartButton cart={ cart } />
      </div>
    );
  }
}
ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      produto: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
      }),
    }),
  }).isRequired,

  match: PropTypes.shape({
    params: PropTypes.shape({
      productName: PropTypes.string,
      categoryId: PropTypes.string,
    }),
  }).isRequired,
};
