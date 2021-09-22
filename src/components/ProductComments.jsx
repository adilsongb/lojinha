import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductComments extends Component {
  render() {
    const { comment: { user, rating, commentsInput } } = this.props;
    return (
      <section>
        <h1>
          Nome:
          {' '}
          { user }
        </h1>
        <h2>
          Avaliação:
          {' '}
          { rating }
        </h2>
        <h3>
          Comentário:
          {' '}
          { commentsInput }
        </h3>
      </section>
    );
  }
}

ProductComments.propTypes = {
  comment: PropTypes.shape({
    user: PropTypes.string,
    rating: PropTypes.string,
    commentsInput: PropTypes.string,
  }).isRequired,
};
