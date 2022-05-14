import React, { useState } from 'react'
import './NewProduct.css'
import Rassrochka from '../rassrochka/Rassrochka';
import products_link from '../../apis/new-user'
import Loader from "../../components/loader/Loader";

const NewProduct = () => {
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState('');
    const [info, setInfo] = useState('')
    const [price, setPrice] = useState('')

    const CreateProduct = (e) => {
      e.preventDefault()
      setLoading(true);
      products_link.post("newProduct", {
        image: image,
        info: info,
        price: price
      })
      .then(newproduct =>{
         console.log(newproduct.data)
         setLoading(false)
        })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }

  const loaderStyle = {
    fontSize: "25px",
    marginLeft: "20px"
  }

    return (
        <div className="create_product_container">
            <div className="create_product">
            <form onSubmit={CreateProduct}>
                <input type="text" value={image} onChange={e => setImage(e.target.value)} placeholder="Product image" required/>
                <input type="text" value={info} onChange={e => setInfo(e.target.value)} placeholder="Product info" required/>
                <span>
                    <input type="text" value={price} onChange={e => setPrice(e.target.value)} placeholder="Product price" required/>
                    <h2>сум</h2>
                    <button disabled={loading} className="login_submit" style={loading ? {opacity: 0.7} : {opacity: 1}} type="submit" > {loading && <Loader loaderStyle={loaderStyle}/>} Create</button>
                </span>
            </form>
            <Rassrochka/>
          </div>
        </div>
    )
}

export default NewProduct
