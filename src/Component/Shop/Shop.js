import React, { useEffect, useState } from 'react';
import './Shop.css';
import Cards from '../CardsProducts/Cards';
import Cart from '../Cart/Cart';


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
                   <Cart cart={cart}></Cart>
               </div>
          </div>
     );
};

export default Shop;