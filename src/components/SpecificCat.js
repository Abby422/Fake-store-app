import React, { useState ,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Product from './Product'
import axios from "axios";


function SpecificCat() {
    const params = useParams()
    let {categories} = params;
    const [product, setproduct] = useState([])
    
    useEffect(() => {
      axios.get(`https://fakestoreapi.com/products/category/${categories}`).then(res => setproduct(res.data))
      setproduct([])
    }, [categories])
    

    return (
      <div>
        <h4 style={{color: 'cadetblue'}}>{categories.toUpperCase()}</h4>
        <div className='products'>
          {product? product.map(products=>(<Product product={products} key={products.id}/>)): "Loading..."}         
        </div>
      </div>
    )
}

export default SpecificCat