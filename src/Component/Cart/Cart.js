import React from 'react';
import './Cart.css'
const Cart = ({cart, clearCart, children}) => {
     
     let total = 0;
     let shipping = 0;
     let quantity = 0;
     for(const product of cart){
          quantity = quantity + product.quantity
          total = total + product.price * product.quantity;
          shipping = shipping + product.shipping;
     }
     const tax = parseFloat(( total * 10 / 100).toFixed(2));
     const grandTotal = total + shipping + tax;
     
     return (
          <div className='cart'>
                  <div className="card-container">
                    <h4>Order Summary</h4>
                    <p>Selected Items:{quantity}</p>
                    <p>Total price: ${total} </p>
                    <p>Total Shipping: ${shipping} </p>
                    <p>Tax: ${tax} </p>
                    <p>Grand Total: {grandTotal}</p>
                    {/* <button onClick={clearCart}>ClearCard</button> */}
                    {children}
               </div>
          </div>
     );
};

export default Cart;