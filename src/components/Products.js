import React, {useContext, useState} from 'react'
import Product from './Product'
import { shopContext } from "../context/Shop";


const Products = () => { 
    const [name] =useState(null);   
    const {products} = useContext(shopContext)
    return (
        <div className='products'>
            { name === null? 
            <> 
            {products? products.map(product=>(<Product product={product} key={product.id}/>)): "Loading..."}
            </> : null
        }
        </div>
    )
}

export default Products