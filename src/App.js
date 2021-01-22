import React from 'react';
import '../src/App.css';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Carousel from './components/carousel/carousel';
import Form from './components/form/form';
import Footer from './components/footer/footer';
import Cart from './Cart.js'



class App extends React.Component {
  state = { 
    cart: [],
    addProductToCart: (newProduct) => {
      let updatedCart = [...this.state.cart, newProduct] 

      console.log([...this.state.cart, newProduct] )
      this.setState({
        cart: updatedCart
      })

      window.localStorage.setItem('cartItems', JSON.stringify(updatedCart))
    }
  }

  componentDidMount() {
    let cartItems = JSON.parse(window.localStorage.getItem('cartItems'));
    
    if(cartItems != null)
    {
      this.setState({
        cart: [...cartItems]
      })
    }
  }

  render() { 
    return ( 
      <Cart.Provider value={this.state}>
        <div>
          <Header />
          <Banner />
          <Carousel />
          <Form />
          <Footer />
        </div>
      </Cart.Provider>
    );
}
}

export default App;
