import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.requestCategories();
  }

  async requestCategories() {
    const response = await getCategories();
    this.setState({ categories: response });
  }

  render() {
    const { categories } = this.state;
    return (
      <>
        <section className="categories">
          <h4>Categorias</h4>
          { categories.map(({ name }, i) => (
            <p key={ i } data-testid="category">{ name }</p>
          )) }
        </section>
        <div>
          <input type="text" id="" />
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
        </div>
      </>
    );
  }
}
