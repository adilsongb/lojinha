import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/ProductCard.css';

export default class ProductCard extends Component {
  render() {
    const { price, title, thumbnail } = this.props;
    return (
      <div className="productCard" data-testid="product">
        <h4>{ title }</h4>
        <img src={ thumbnail } alt={ `Imagem de ${title}` } />
        <p>{ `R$ ${price}` }</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
}.isRequired;
