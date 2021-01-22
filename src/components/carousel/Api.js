/*import React, {Components} from 'react';
import '../../App.css';


import axios from 'axios';
import Carousel from 'react-elastic-carousel';

const api = axios.create({
    baseUrl: 'https://corebiz-test.herokuapp.com/api/v1/products'
})

class App extends Components {
    state = {
        product: []
    }



    async componetDidMount(){
        const response = await api.get ('1')
        this.setState = ({product: response.data})
    }




    render() {
        const {product} = this.state

        return(
            <center>
            <Carousel>

                {product.map(products =>
                 
                 <div className="container">

                     <ul className='ul'>
                         <li>
                             <img src={products.imageUrl} alt="products"/>
                             <div>
                                 <h2>{products.productName}</h2>

                                 <p>
                                     {products.price}</p>
                             </div>

                         </li>
                     </ul>
                 </div>
                )}

            </Carousel>
            </center>

        )
    }
}
export default App;








/*const API2 = 'https://corebiz-test.herokuapp.com/api/v1/products';

const basicFetch = async () => {
    const req = await fetch (`${API2}`);
    const json = await req.json();
    return json;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getProducts: async () => {
        return [{
            Array_products: await basicFetch ('https://corebiz-test.herokuapp.com/api/v1/products')
        }]
    }
};
*/