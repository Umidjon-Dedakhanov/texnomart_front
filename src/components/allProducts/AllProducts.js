import React, { useState, useEffect } from 'react'
import './allProducts.css'
import axois from '../../apis/new-user'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { FiShoppingCart, FiHeart } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { addProductSuccess } from '../../redux/actions/cartAction'


const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function getAllProducts() {
          setLoading(true);
          try {
            let allProducts = await axois.get("all");
            setProducts(allProducts?.data.allProducts);
            setLoading(false);
          } catch (err) {
            console.log(err);
            setLoading(false);
          }
        }
    
        getAllProducts();
      }, []);

    return (
        <div className="all_products_container">
          <h2>Телефоны</h2>
           <Swiper
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      > 
        {
            products?.filter(title => title.info.includes('Galaxy')).map((product, index) => (
                <SwiperSlide key={index} className="slide">
                    <img src={product.image} alt="img" />
                    <span className="info">{product.info}</span>
                    <h4 className="price">{product.price} Сум</h4>
                    <div className="btn">
                      <button onClick={() => {dispatch(addProductSuccess(product))
                                console.log(product)}}><FiShoppingCart className="i"/> В корзину</button>
                      <FiHeart/>
                      <img src="https://texnomart.uz/files/global/new-photo/icons/header-compair-new.svg" alt="" />
                    </div>
                </SwiperSlide>
            ))

        }
      </Swiper>
      <h2>Ноутбуки</h2>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      > 
        {
            products?.filter(title => title.info.includes('Ноутбук')).map((product, index) => (
                <SwiperSlide key={index} className="slide">
                    <img src={product.image} alt="img" />
                    <span className="info">{product.info}</span>
                    <h4 className="price">{product.price} Сум</h4>
                    <div className="btn">
                      <button><FiShoppingCart className="i"/> В корзину</button>
                      <FiHeart/>
                      <img src="https://texnomart.uz/files/global/new-photo/icons/header-compair-new.svg" alt="" />
                    </div>
                </SwiperSlide>
            ))

        }
      </Swiper>
      <h2>Телевизоры</h2>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      > 
        {
            products?.filter(title => title.info.includes('Телевизор')).map((product, index) => (
                <SwiperSlide key={index} className="slide">
                    <img src={product.image} alt="img" />
                    <span className="info">{product.info}</span>
                    <h4 className="price">{product.price} Сум</h4>
                    <div className="btn">
                      <button><FiShoppingCart className="i"/> В корзину</button>
                      <FiHeart/>
                      <img src="https://texnomart.uz/files/global/new-photo/icons/header-compair-new.svg" alt="" />
                    </div>
                </SwiperSlide>
            ))

        }
      </Swiper>
      <h2 className="all">Подборки <a href="http://localhost:3000/products">Смотреть все →</a></h2>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      > 
        {
            products?.map((product, index) => (
                <SwiperSlide key={index} className="slide">
                    <img src={product.image} alt="img" />
                    <span className="info">{product.info}</span>
                    <h4 className="price">{product.price} Сум</h4>
                    <div className="btn">
                      <button><FiShoppingCart className="i"/> В корзину</button>
                      <FiHeart/>
                      <img src="https://texnomart.uz/files/global/new-photo/icons/header-compair-new.svg" alt="" />
                    </div>
                </SwiperSlide>
            ))

        }
      </Swiper>
        </div>
    )
}

export default AllProducts
