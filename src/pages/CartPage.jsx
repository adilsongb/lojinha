import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartProduct from '../components/CartProduct';

class CartPage extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      noRepeatCart: [],
      totalPrice: 0,
    };
  }

  componentDidMount() {
    this.loadCart();
  }

  loadCart = async () => {
    let accPrices = 0;
    const localStorageData = await JSON.parse(localStorage.getItem('cartItens'));

    localStorageData.forEach((item) => {
      accPrices += item.price;
    });

    const noRepeatCartItens = localStorageData.filter((item, index, self) => (
      index === self.findIndex((product) => (product.id === item.id))));

    this.setState({
      cart: localStorageData,
      noRepeatCart: noRepeatCartItens,
      totalPrice: accPrices.toFixed(2),
    });
  }

  updateCartRender = async () => {
    let accPrices = 0;
    const localStorageData = await JSON.parse(localStorage.getItem('cartItens'));

    localStorageData.forEach((item) => {
      accPrices += item.price;
    });

    this.setState({
      cart: localStorageData,
      totalPrice: accPrices.toFixed(2),
    });
  }

  increaseProduct = (product) => {
    const { cart } = this.state;
    const updateCart = [...cart, product];
    localStorage.setItem('cartItens', JSON.stringify(updateCart));
    this.updateCartRender();
  }

  decreaseProduct = (id, count) => {
    const NUM_FALSE = -1;
    const { cart } = this.state;
    const updateCart = cart;
    const indexProduct = cart.findIndex((item) => item.id === id);

    if (count !== 1 && indexProduct !== NUM_FALSE) {
      updateCart.splice(indexProduct, 1);
      localStorage.setItem('cartItens', JSON.stringify(updateCart));
      this.updateCartRender();
    } else {
      this.removeProduct(id);
    }
  }

  removeProduct = (id) => {
    const NUM_FALSE = -1;
    const { cart } = this.state;
    const updateCart = [...cart];
    for (let i = 0; i < updateCart.length; i += 1) {
      if (updateCart[i].id === id) {
        updateCart.splice(i, 1);
        i = NUM_FALSE;
      }
    }
    localStorage.setItem('cartItens', JSON.stringify(updateCart));
    this.loadCart();
  }

  render() {
    const { cart, noRepeatCart, totalPrice } = this.state;
    return (
      <div>
        <Link to="/">Voltar</Link>
        <h2>Carrinho de Compras</h2>
        { noRepeatCart.length > 0
          ? noRepeatCart.map((product) => (
            <CartProduct
              key={ product.id }
              cart={ cart }
              product={ product }
              decreaseProduct={ this.decreaseProduct }
              increaseProduct={ this.increaseProduct }
              removeProduct={ this.removeProduct }
            />
          ))
          : <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3> }
        <h3>{`Total a pagar: R$ ${totalPrice}`}</h3>
      </div>
    );
  }
}

CartPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cart: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
}.isRequired;

export default CartPage;
