import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from '../components/StarRating';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${id}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data.singleProduct);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const increaseQuantity = () => {
    if (quantity < parseInt(product.stock)) {
      setQuantity(prev => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row lg:justify-around gap-8">
        {/* Product Image */}
        <div className="lg:w-5/12">
          <img 
            src={product.images[0].image}
            alt={product.name}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-5/12 mt-5">
          <h3 className="text-2xl font-semibold">
            {product.name}
          </h3>
          
          <p className="text-gray-500 mt-2">Product # {product._id}</p>
          
          <hr className="my-4" />
          
          <div className="my-4">
            <StarRating ratings={parseFloat(product.ratings)} />
          </div>
          
          <hr className="my-4" />
          
          <p className="text-3xl font-bold text-gray-900">${product.price}</p>
          
          <div className="flex items-center mt-4 space-x-4">
            <div className="flex items-center">
              <button 
                onClick={decreaseQuantity}
                className="px-3 py-1 bg-red-500 text-white rounded-l hover:bg-red-600 focus:outline-none"
              >
                -
              </button>
              <input 
                type="number" 
                className="w-16 px-3 py-1 text-center border-t border-b focus:outline-none"
                value={quantity}
                readOnly 
              />
              <button 
                onClick={increaseQuantity}
                className="px-3 py-1 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none"
              >
                +
              </button>
            </div>
            
            <button 
              className={`px-6 py-2 rounded focus:outline-none ${
                parseInt(product.stock) > 0 
                  ? 'bg-blue-500 hover:bg-blue-600 text-white'
                  : 'bg-gray-400 cursor-not-allowed text-gray-200'
              }`}
              disabled={parseInt(product.stock) === 0}
            >
              Add to Cart
            </button>
          </div>
          
          <hr className="my-4" />
          
          <p className="text-lg">
            Status: 
            <span className={`font-semibold ${parseInt(product.stock) > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {parseInt(product.stock) > 0 ? ' In Stock' : ' Out of Stock'}
            </span>
          </p>
          
          <hr className="my-4" />
          
          <div>
            <h4 className="text-xl font-semibold mb-2">Description:</h4>
            <p className="text-gray-700">
              {product.description}
            </p>
          </div>
          
          <hr className="my-4" />
          
          <p className="mb-3">
            Sold by: <strong>{product.seller}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;