import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductDetail extends Component {
  render() {
    const { props } = this;
    const { state } = props.location;
    const { produto } = state;
    const { id, title, price, thumbnail } = produto;
    return (
      <div>
        <h1 data-testid="product-detail-name">
          {title}
        </h1>
        <p>{thumbnail}</p>
        <p>{id}</p>
        <p>{price}</p>
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
