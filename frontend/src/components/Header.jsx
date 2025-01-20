import React from "react";
import Search from "./Search";

const Header = () => {

    return (
        <>
         <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src="./images/logo.png" alt="Logo" />
            </div>
            
            <Search/>

            <div className="flex items-center">
              <div className="relative">
                <span className="text-gray-700">Cart</span>
                <span className="ml-1 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">2</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

        </>
    )
}

export default Header;