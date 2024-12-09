import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems, addToCart, food_list, removeFromCart, deleteFromCart, getTotalCartAmount} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <h1>Shopping Cart</h1>
      <div className="cart-items">        
        <div className="cart-items-title">
          <p>Item</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if(cartItems[item._id] > 0){
            return(
              <div>
                <div className="cart-items-title cart-items-item">
                <div className='cart-items-details-image'>
                <img className='cart-items-item-image' src={item.image} alt="" />
                <div className='cart-items-item-details'>
                  <p className='cart-items-item-name'>{item.name}</p>
                  <p>Price: ${item.price}</p>
                  <div className='cart-items-quantity'>
                    <img onClick={()=>removeFromCart(item._id)} src={assets.cart_minus} alt="" />
                    <p>{cartItems[item._id]}</p>
                    <img onClick={()=>addToCart(item._id)} src={assets.cart_plus} alt="" />
                  </div>
                </div>
                </div>
                <p>${item.price * cartItems[item._id]}</p>
                <img onClick={()=> deleteFromCart(item._id)} className='cart-items-item-cross' src={assets.cross_icon} alt="" />
              </div>
              <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0 ? 0 : 5}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0 ? 0 : getTotalCartAmount() + 5}</b>
            </div>
          </div>
          <button onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocard">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart