import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTypewriter} from 'react-simple-typewriter'
import './Header.css'
import { FiChevronDown, FiMic, FiSearch, FiUser, FiHeart, FiChevronRight } from 'react-icons/fi'
import category from '../../static/HeaderStatic'

const Header = () => {
    const [catalog, setCatalog] = useState(false)
    const {text} = useTypewriter({
        words: ["Техника для дома","Офисная техника","Посуда для дома",'Товары для авто',"Климатическая техника","Телевизоры и телекарты"],
        loop: {Infinity},
        typeSpeed: 50,
        deleteSpeed: 30
        // delaySpeed{1000}
    })
    return (
        <div className="header_container">
            <div className="nav_wrap">
                <nav>
                    <img src="	https://texnomart.uz/files/global/new-photo/img/logotipe/logotipe.svg" alt="" />
                    <div className="search_area">
                        <div className="select">
                            <span>Все категории <FiChevronDown className="chevron"/></span>
                            <div className="select_list">
                                <ul>
                                    <li>Все категории</li>
                                    <li>Техника для дома</li>
                                    <li>Офисная техника</li>
                                    <li>Посуда для дома</li>
                                    <li>Товары для авто</li>
                                    <li>Климатическая техника</li>
                                    <li>Телевизоры и телекарты</li>
                                </ul>
                            </div>
                        </div>
                        <input  type="text" placeholder={text} />
                        <FiMic className="i"/>
                        <button><FiSearch /></button>
                    </div>
                    <ul className="nav_details">
                    <Link to="/login" style={{textDecoration: "none"}}>
                            <li>
                                <FiUser className="icon"/>
                                <span>Войти</span>
                            </li>
                    </Link> 
                        <li>
                            <img src="https://texnomart.uz/files/global/new-photo/icons/header-compair-new.svg" alt="" />
                            <span>Сравнения</span>
                        </li>
                        <li>
                            <FiHeart className="icon"/>
                            <span>Избранное</span>
                        </li>
                        <Link to="/cart" style={{textDecoration: "none"}}>
                        <li>
                            <img src="https://texnomart.uz/files/global/new-photo/icons/product-card.svg" alt="" />
                            <span>Корзина</span>
                        </li>
                        </Link>
                    </ul>
                </nav>
            </div>
            <div className="header_tools">
                <button onClick={(e) => setCatalog(true)} onBlur={(e) => setCatalog(false)} className="catalog">
                    <span><img src="https://texnomart.uz/files/global/new-photo/icons/header-catalog.svg" alt="" /> Каталог <p></p></span>
                    <div className="catalog_list" style={catalog ? {display: "block"} : {display: "none"}}>
                            <ul>
                                {
                                    category?.map((item, index) => 
                                        <li key={index}>
                                            <img className="img" src={item.icon} alt="" />
                                            <span>{item.name}</span>
                                            <FiChevronRight className="chevron_right"/>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                </button>
                <ul>
                    <li>🔥 АКЦИИ</li>
                    <li>СМАРТФОНЫ</li>
                    <li>ХОЛОДИЛЬНИКИ</li>
                    <li>ПЫЛЕСОСЫ</li>
                    <li>КОНДИЦИОНЕРЫ</li>
                    <li>НОУТБУКИ</li>
                    <li>СТИРАЛЬНЫЕ МАШИНЫ</li>
                    <li>ТЕЛЕВИЗОРЫ</li>
                    <li>ВСЕ КАТЕГОРИИ</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
