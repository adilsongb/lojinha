import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductComments extends Component {
  render() {
    const { comment: { user, rating, commentsInput } } = this.props;
    return (
      <section className="comments">
        <div className="profile-comment">
          <span>
            <i className="fas fa-user-circle" />
            { user }
          </span>
        </div>
        <div className="avaliation-comment">
          <span>
            { `Avaliação: ${rating}` }
          </span>
          <h3>
            <em>{ `"${commentsInput}"` }</em>
          </h3>
        </div>
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
