import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/ProductCard.css';

export default class ProductCard extends Component {
  render() {
    const { price, title, thumbnail } = this.props;
    return (
      <div className="productCard" data-testid="product">
        <div className="img-container">
          <img src={ thumbnail } alt={ `Imagem de ${title}` } />
        </div>
        <div className="details-container">
          <h4>{ title }</h4>
          <span>{ `R$ ${price.toFixed(2)}` }</span>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
}.isRequired;
