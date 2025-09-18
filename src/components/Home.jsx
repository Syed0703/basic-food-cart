import React, { useState } from 'react'
import food_data from "../assets/foods.json"
import Product from './Product';
import './Home.css'

const Home = () => {

  const [products] = useState(food_data);

  return (
    <div className='product-conatiner'>
      {products.map((product) => {
        return(
          <Product key={product.id} product={product}/>
        )
      })}
    </div>
  )
}

export default Home
