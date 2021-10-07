import React from 'react';
import PropTypes from 'prop-types';

class ProductRating extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      commentsInput: '',
      rating: '',
    };
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = () => {
    if (!JSON.parse(localStorage.getItem('comments'))) {
      localStorage.setItem('comments', JSON.stringify([]));
    }
    const commentsLocalStorage = JSON.parse(localStorage.getItem('comments'));
    const { user, commentsInput, rating } = this.state;
    localStorage.setItem('comments',
      JSON.stringify([...commentsLocalStorage,
        { user, commentsInput, rating }]));
  }

  render() {
    const { user, commentsInput } = this.state;
    return (
      <section className="create-comment">
        <form>
          <div className="inputs-text">
            <input
              name="user"
              type="text"
              value={ user }
              onChange={ this.handleChange }
              placeholder="Nome"
            />
            <textarea
              placeholder="Mensagem (Opcional)"
              data-testid="product-detail-evaluation"
              name="commentsInput"
              value={ commentsInput }
              onChange={ this.handleChange }
            />
          </div>

          <div className="avaliation">
            <span>Avaliação</span>
            <div>
              <label htmlFor="1">
                1
                <input
                  type="radio"
                  name="rating"
                  onChange={ this.handleChange }
                  value="1"
                />
              </label>
              <label htmlFor="2">
                2
                <input
                  type="radio"
                  name="rating"
                  onChange={ this.handleChange }
                  value="2"
                />
              </label>
              <label htmlFor="3">
                3
                <input
                  type="radio"
                  name="rating"
                  onChange={ this.handleChange }
                  value="3"
                />
              </label>
              <label htmlFor="4">
                4
                <input
                  type="radio"
                  name="rating"
                  onChange={ this.handleChange }
                  value="4"
                />
              </label>
              <label htmlFor="5">
                5
                <input
                  type="radio"
                  name="rating"
                  onChange={ this.handleChange }
                  value="5"
                />
              </label>
            </div>
          </div>
        </form>
        <input
          type="button"
          className="button-avaliation"
          value="Enviar"
          onClick={ this.handleSubmit }
        />
      </section>
    );
  }
}

ProductRating.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
}.isRequired;

export default ProductRating;
