import React, { useEffect, useState } from 'react';
import './Shop.css';
import Cards from '../CardsProducts/Cards';


const Shop = () => {
     const [cart, setCard] = useState([])
     //Event handlar
     const handleAddToCart = (product) =>{
          console.log(product);
          //donot do this cart.push(product);
          const newCart = [...cart, product]
          setCard(newCart);
     }
     const [products,setProducts] =useState([])
     useEffect(()=>{
          fetch('products.json')
          .then(res => res.json())
          .then(data => setProducts(data))
     },[])
     return (
          <div className='shop-container'>
               <div className="Products-container">                   
                    {
                         products.map(product=> <Cards 
                              key={product.id}
                              product={product}
                              handleAddToCart = {handleAddToCart}
                              ></Cards>)
                    }
               </div>
               <div className="card-container">
                    <h4>Order Summary</h4>
                    <p>Selected Items:{cart.length}</p>
               </div>
          </div>
     );
};

export default Shop;