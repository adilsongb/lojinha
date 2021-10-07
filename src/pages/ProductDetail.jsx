import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartButton from './CartButton';
import ProductRating from '../components/ProductRating';
import ProductComments from '../components/ProductComments';
import './ProductDetail.css';

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      comments: [],
    };
  }

  componentDidMount() {
    this.loadStorage();
    if (JSON.parse(localStorage.getItem('comments'))) {
      this.loadComments();
    }
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

  loadComments = async () => {
    const storage = localStorage.getItem('comments');
    const parseStorage = await JSON.parse(storage);
    this.setState({ comments: parseStorage });
  }

  render() {
    const { props } = this;
    const { state } = props.location;
    const { produto } = state;
    const { cart, comments } = this.state;
    const { id, title, price, thumbnail } = produto;

    return (
      <div className="container-product-details">
        <div className="header-page-details">
          <Link to="/">
            <i className="fas fa-arrow-left"></i>
            Voltar
          </Link>
          <CartButton cart={ cart } />
        </div>

        <div className="product-detail">
          <div className="cont-img">
            <img src={thumbnail} alt="image product" />
          </div>

          <div>
            <h1 data-testid="product-detail-name">
              {title}
            </h1>
            <p className="id-product">{id}</p>
            <p className="price">R$ {price}</p>
            <button
              type="button"
              className="button-add-cart"
              data-testid="product-detail-add-to-cart"
              onClick={ this.addToCart }
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>

        <ProductRating />
        { comments.length > 0 ? comments.map((comment, index) => (<ProductComments
          key={ index }
          comment={ comment }
        />)) : '' }
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
