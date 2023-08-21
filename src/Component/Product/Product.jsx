import React from 'react'
import "./Product.css";


function Product(id,title,details,price,rating,image) {
  return (
    <div className="product__container">
      {/* <!-- product --> */}
      <div className="product__info">
        <small>{title}</small>
        <p>{details}</p>
        
      </div>
      <div className="product__price">
        <p>$<b>{price}</b></p>
      </div>
      <div className='product__img'> 
      <img src={image} alt="" />
      </div>

      <button className="cart__button">Add to Cart</button>


    </div>
  )
}

export default Product