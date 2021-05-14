import React, {Suspense} from 'react'
import './home.css';
import ProductList from '../product/product-list/pro-list'

function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
       <ProductList />
    </Suspense> 
  );
}

export default Home;
