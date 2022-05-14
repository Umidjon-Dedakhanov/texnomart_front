import React from 'react'
import './Rassrochka.css'
import rassrochka from '../../static/RassrochkaStatic'

const Rassrochka = () => {
    return (
        <div className="rassrochka_container">
            <h1>Телефоны и бытовая техника в рассрочку</h1>
            <ul>
                {
                    rassrochka?.map((i, nx) => 
                        <li key={nx}>
                            <img src={i.img} alt="" />
                            <h4>{i.title}</h4>
                            <span>{i.info}</span>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Rassrochka
