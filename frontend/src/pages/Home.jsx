import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";


const Home = () => {
  const [products,setProducts] = useState([]);
  const [search,useSearch] = useSearchParams();

  useEffect(()=>{
      fetch( process.env.REACT_APP_API_URL + "/products?" + search)
       .then(res => res.json())
      .then( res => {setProducts(res.product)
      })
  },[search])


  return (
  
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto  py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Latest Products</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard {...product} key={product._id} />
            ))}
          </div>
        </div>
      </main>
  );
};

export default Home;