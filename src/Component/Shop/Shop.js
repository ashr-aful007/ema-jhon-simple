import React, { useEffect, useState } from 'react';
import './Shop.css';
import Cards from '../CardsProducts/Cards';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';


const Shop = () => {
     const [cart, setCard] = useState([])
     //Event handlar
     const handleAddToCart = (selectedProduct) =>{

          let newCart = [];
          const exists = cart.find(product => product.id === selectedProduct.id);
          if(!exists){
               selectedProduct.quantity = 1;
               newCart = [...cart, selectedProduct];
          }
          else{
               const rest = cart.filter(product => product.id !== selectedProduct.id);
               exists.quantity = exists.quantity + 1;
               newCart = [...rest, selectedProduct]
          }
          
          setCard(newCart);
          addToDb(selectedProduct.id)
     }
     const [products,setProducts] =useState([])
     useEffect(()=>{
          fetch('products.json')
          .then(res => res.json())
          .then(data => setProducts(data))
     },[])

     useEffect(()=>{
          const storedCart = getStoredCart();
          const savedCart = [];
          for(const id in storedCart){
               const addedProduct = products.find(product => product.id === id);
               if(addedProduct){
                    const quantity = storedCart[id];
                    addedProduct.quantity = quantity;
                    savedCart.push(addedProduct)
               }
          }
          setCard(savedCart);
     },[products])


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