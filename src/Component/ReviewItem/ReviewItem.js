import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './Reviewitem.css'

function ReviewItem({product,handleRemoveItem,clearCart}) {
     const {name, price, quantity, img, shipping,id} = product
  return (
    <div className='review-item'>
     <div>
          <img src={img}></img>
     </div>
     <div className="review-details-container">
          <div className="review-details">
              <p>{name}</p>
              <p><small>price:$ {price} </small></p>
              <p><small>Shipping: $ {shipping}</small></p>
              <p><small>Quantity:{quantity} </small></p>
          </div>
          <div className="delete-button">
               <button onClick={()=>handleRemoveItem(id)} className='btn-delete'>
                    <FontAwesomeIcon className='delete-Icon' icon={faTrashAlt}></FontAwesomeIcon>
               </button>               
          </div>
     </div>
    </div>
  )
}

export default ReviewItem