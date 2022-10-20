import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

function Order() {

  const {products, initialCart} = useLoaderData();
  const [cart, setCard] = useState(initialCart)

  //clear Card
  const clerCart = () =>{
    setCard([]);
    deleteShoppingCart();
}

  
  const handleRemoveItem = (id) =>{
    const remaining = cart.filter(prouct => prouct.id !== id);
    setCard(remaining)
    removeFromDb(id);
  }


  return (
    <div className='shop-container'>
      <div className='orders-container'>
        {
          cart.map(product => <ReviewItem 
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>)
        }
        {
          cart.length === 0 && <h2>No items for Review. Please <Link to="/">Shop</Link></h2>
        }
      </div>
      <div className='cart-container'>
        <Cart clearCart={clerCart} cart={cart}></Cart>
        <Link to='/shipping'>
        <button>Proced shipping</button>
        </Link>
       
      </div>
    
    </div>
  )
}

export default Order;