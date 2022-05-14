import React, { useState, useEffect } from 'react'
import './Products.css'
import axios from '../../apis/new-user';
import { useDispatch } from 'react-redux'
import { addProductSuccess } from '../../redux/actions/cartAction'
import { FiShoppingCart, FiHeart } from 'react-icons/fi'
import Header from '../header/Header';


const Products = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        async function getAllProducts() {
          try {
            let allProducts = await axios.get("all");
            setProducts(allProducts?.data.allProducts);
          } catch (err) {
            console.log(err);
          }
        }
        getAllProducts();
      }, []);

      
    return (
        <>
            <Header/>
            <div className="all_products_container">
                <div className="all_pruducts">
                    {
                        products?.map((item, index) => 
                            <div key={index} className='product'>
                                <img id="image" src={item.image} alt="img" />
                                <span className="info">{item.info}</span>
                                <h4 className="price">{item.price} Сум</h4>
                                <div className="btn">
                                    <button onClick={() => {dispatch(addProductSuccess(item))
                                    console.log(item)}}><FiShoppingCart className="i"/> В корзину</button>
                                    <FiHeart/>
                                    <img src="https://texnomart.uz/files/global/new-photo/icons/header-compair-new.svg" alt="" />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Products
