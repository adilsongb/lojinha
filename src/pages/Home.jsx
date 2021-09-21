import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import ProductCard from '../components/ProductCard';
import CartButton from './CartButton';
import Category from '../components/Category';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      response: {},
      categoryId: '',
      query: '',
      searched: false,
      categories: [],
    };
  }

  componentDidMount() {
    this.requestCategories();
  }

  handleInput = ({ target: { value } }) => {
    this.setState({ query: value });
  }

  handleSearch = async () => {
    const { categoryId, query } = this.state;
    const result = await getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ response: result, searched: true });
  }

  handleCategory = (id) => {
    this.setState({ categoryId: id }, () => this.handleSearch());
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

  async requestCategories() {
    const response = await getCategories();
    this.setState({ categories: response });
  }

  render() {
    const { categories, query, response, searched } = this.state;
    const { results } = response;
    return (
      <div>
        <div>
          <section className="categories">
            <h4>Categorias</h4>
            { categories.map(({ name, id }) => (
              <Category
                key={ id }
                name={ name }
                id={ id }
                onClick={ this.handleCategory }
              />
            )) }
          </section>
          <div>
            <CartButton />
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
          </div>
        </div>

        <div>
          <section id="search-results">
            { searched
              ? this.resultsRender(results)
              : 'Você não realizou uma pesquisa' }
          </section>
        </div>
      </div>
    );
  }
}
