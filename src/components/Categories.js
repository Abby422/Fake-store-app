/* eslint-disable */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

const categories = 'https://fakestoreapi.com/products/categories'

function Categories() {
    const [productCategory, setproductCategory] = useState(null)

    useEffect(() => {
      axios.get(categories).then((category) => setproductCategory(category.data))
    }, [])
    

  return (
    <div className='categories'>
        {productCategory? productCategory.map( category =>
            (<div className='category-link' key={category}>
            
            <Link to={`/${category}`} >{category.toUpperCase()}</Link>
            </div>))
            : "Loading..."}
    </div>
  )
}

export default Categories