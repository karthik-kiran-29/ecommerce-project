import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search?' element={<Home/>}/>
          <Route path='/products/:id' element={<ProductDetails/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  
  )
}

export default App
