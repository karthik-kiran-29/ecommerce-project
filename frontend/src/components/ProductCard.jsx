import React from "react";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

const   ProductCard = ({_id,images,name,ratings,reviews,price})=>{
    return (
        <div key={_id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <img
                    src={images[0].image}
                    alt={name}
                    className="w-full h-48 object-contain"
                  />
                  <div className="mt-4">
                    <h2 className="text-lg font-medium text-gray-900 hover:text-blue-500 truncate">
                      {name}
                    </h2>
                    <div className="mt-2 flex items-center">
                      <StarRating ratings={ratings} />
                      <span className="ml-2 text-sm text-gray-500">
                        ({reviews} Reviews)
                      </span>
                    </div>
                    <p className="mt-2 text-xl font-bold text-gray-900">
                      ${price}
                    </p>
                    <Link to={"/products/" + _id}>
                        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                         View Details
                        </button>
                    </Link>
                  </div>
                </div>
              </div>
    )
}

export default ProductCard;