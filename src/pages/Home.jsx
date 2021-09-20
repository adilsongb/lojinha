import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      response: {},
      categoryId: '',
      query: '',
      searched: false,
    };
  }

  handleInput = ({ target: { value } }) => {
    this.setState({ query: value });
  }

  handleSearch = async () => {
    const { categoryId, query } = this.state;
    const result = await getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ response: result, searched: true });
  }

  resultsRender = (results) => {
    if (results.length > 0) {
      return results.map((result) => (
        <ProductCard
          key={ result.id }
          price={ result.price }
          title={ result.title }
          thumbnail={ result.thumbnail }
        />
      ));
    }
    return 'Nenhum produto foi encontrado';
  }

  render() {
    const { query, response, searched } = this.state;
    const { results } = response;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.handleInput }
          value={ query }
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.handleSearch }
        >
          Pesquisar
        </button>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <section id="search-results">
          { searched
            ? this.resultsRender(results)
            : 'Você não realizou uma pesquisa' }
        </section>
      </div>
    );
  }
}
