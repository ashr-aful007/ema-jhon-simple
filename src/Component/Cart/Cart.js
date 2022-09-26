import React from 'react';

const Cart = ({cart}) => {
     return (
          <div>
                  <div className="card-container">
                    <h4>Order Summary</h4>
                    <p>Selected Items:{cart.length}</p>
               </div>
          </div>
     );
};

export default Cart;