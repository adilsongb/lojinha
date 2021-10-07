import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Category extends Component {
  callbackHandler = () => {
    const { onClick, id } = this.props;
    onClick(id);
  }

  render() {
    const { name } = this.props;
    return (
      <button
        type="button"
        data-testid="category"
        onClick={ this.callbackHandler }
      >
        { name }
      </button>
    );
  }
}

Category.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;
