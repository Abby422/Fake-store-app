import React, { useState ,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Product from './Product'
import axios from "axios";


function SpecificCat() {
    let {categories} = useParams()
    const [product, setproduct] = useState([])
    
    useEffect(() => {
      axios.get(`https://fakestoreapi.com/products/category/${categories}`).then(res => setproduct(res.data))
    }, [])
    

    return (
      <div className='products'>
            {product? product.map(products=>(<Product product={products} key={products.id}/>)): "Loading..."}         
      </div>
    )
}

export default SpecificCat