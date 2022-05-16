import React from 'react'
import './Banner.css'
import { Slider } from "infinite-react-carousel";
import products_type from '../../static/ProductsStatic'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


const Banner = () => {
    const settings =  {
        arrows: true,
        arrowsBlock: true,
        autoplay: true,
        dots: false,
      };
    return (
        <div className="banner_conatiner">
            <Slider className="slider" { ...settings }>
                <div>
                <img src="https://texnomart.uz/uploads/slides/8290671920x400%20%D1%80%D1%83%D1%81%D1%81.png" alt="" />
                </div>
                <div>
                <img src="https://texnomart.uz/uploads/slides/9703601920x400%20%D1%80%D1%83%D1%81%D1%81.png" alt="" />
                </div>
                <div>
                <img src="https://texnomart.uz/uploads/slides/1325841920x400-ru.webp" alt="" />
                </div>
                <div>
                <img src="https://texnomart.uz/uploads/slides/6134601920x400%20%D1%80%D1%83%D1%81.png" alt="" />
                </div>
                <div>
                <img src="https://texnomart.uz/uploads/slides/7123641920x400_%D1%80%D1%83%D1%81%D1%81.webp" alt="" />
                </div>
                <div>
                <img src="https://texnomart.uz/uploads/slides/7255091920x400%20%D1%80%D1%83%D1%81%D1%81.png" alt="" />
                </div>
                <div>
                <img src="	https://texnomart.uz/uploads/slides/188565%D0%B3%D0%B0%D1%80%D0%B0%D0%BD%D1%82%D0%B8%D1%8F.webp" alt="" />
                </div>
          </Slider>
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="slider_products" style={{display: "flex", justifyContent: "center"}}>
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
        className="mySwiperb"
      > 
        {
            products_type?.map((i, index) => (
                <SwiperSlide key={index} className="slider2">
                    <img src={i.img} alt="img" />
                    <span>{i.text}</span>
                </SwiperSlide>
            ))

        }
      </Swiper>
          </div>
            
        </div>
    )
}

export default Banner
