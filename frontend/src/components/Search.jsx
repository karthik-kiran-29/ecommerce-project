import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ()=>{
    const navigate = useNavigate();
    const [keyword,setKeyword] = useState("");
    
    const onClickHandler = () =>{
        navigate("/search?keyword=" + keyword);
    }

    return(
        <>
         <div className="flex-1 max-w-2xl mx-4">
              <div className="relative">
                <input
                  type="text"
                  onChange={(e)=>{setKeyword(e.target.value)}}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter Product Name ..."
                  onBlur={onClickHandler}
                />
                <button onClick={onClickHandler} className="absolute right-0 top-0 mt-2 mr-2 text-gray-600 hover:text-blue-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
        </>
    )
}

export default Search;