import React from 'react'
import './Cart.css'
import { useSelector } from 'react-redux';
import Header from '../header/Header'


const Cart = () => {
    const prd = useSelector(state => state.cartReducer.product);
    console.log(prd);

    return prd?.length ? (
        <div className="cart_container">
            <Header className="cart_header"/>
            <div className="cart">
                <h2 style={{fontSize: "30px", fontWeight: "500"}}>Cart</h2>
                {
                    prd?.map((cartItem, nx) => 
                        <div key={nx} className='cart_product'>
                            <h4>{cartItem[1]}</h4>
                        <img src={cartItem.image} alt="img" />
                        <span className="product_info">{cartItem.info}</span>
                        <h4 className="product_price">{cartItem.price} Сум</h4>
                        </div>
                    )
                }
            </div>
        </div>
    ) : (
        <div className="product_container">
             {/* <Header/> */}
            <img src="https://texnomart.uz/files/global/new-photo/img/error/shopping-cart.svg" alt="" />
          <h1> В корзине пока ничего нет</h1>
        </div>
      ) 
}

export default Cart

