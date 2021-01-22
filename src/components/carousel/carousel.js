import React from 'react';
import '../carousel/carousel.css';
import { Carousel } from 'react-responsive-carousel';

import axios from 'axios';

import positive from '../../assets/images/positive.png';
import negative from '../../assets/images/negative.png';

import Cart from '../../Cart.js';



class Shelf extends React.Component {
    state = {
        products: []
    }

    async componentDidMount() {
        axios.get('https://corebiz-test.herokuapp.com/api/v1/products')
        .then (res =>{
            let products = res.data;
            this.setState ({products})
        })
    }

    starsRender(starsCount) {
        let starsList = []
        for(let i = 1;i <= 5; i++)
    {
    starsList.push(<img key={"star" + i} src={i <= starsCount ? positive : negative} alt={"Star"}/>)
}

return starsList;
    
    }

    formatPrice (price)
    {
        let formattedPrice = price / 100;
        return formattedPrice.toFixed(2).toLocaleString("pt-BR");
    }


    render () {
        return (
                <Cart.Consumer>
                    {({cart, addProductToCart}) =>(
                        <div className='shelf'>
                        <div className='container'>
                            <h2>Mais Vendidos</h2>
                            <ul className='products' >
                                {
                                    this.state.products.map((element) =>
                                    <li key={element.productName} className='product' >
                                        <img src={element.imageUrl} alt={element.productName} className='productImage' />
                                            {element.listPrice ? <div className='productDiscountFlag'></div> : null}
                                            <div className='productBody'>
                                                <p className='productName'>{element.productName}</p>
                                                <div className='stars'>
                                                    { this.starsRender(element.stars) }
                                                </div>
                                                <p className='listedPrice'>{element.listPrice != null ? "de R$" + this.formatPrice(element.listPrice) : null}</p>
                                                <p className='price'> por R$ {this.formatPrice(element.price)}</p>
                                                <p className='installments'>{element.installments.lenght > 0 ? "ou em" + element.installments[0].quantify + "x de R$" + this.formatPrice(element.installments[0].value) : null }</p>
                                                <button className='productButton' onClick={() => addProductToCart(element)}>Comprar</button>
                                            </div>
                                    </li>
                                    
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    )}
                </Cart.Consumer>
        );
      }
    }


    export default Shelf;