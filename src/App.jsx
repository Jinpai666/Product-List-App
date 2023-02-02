import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import AddProduct from "./components/AddProduct/AddProduct.jsx";
import ProductList from "./components/ProductList/ProductList.jsx";

function App() {

  return (
    <div className="App">
        <AddProduct/>
        <ProductList/>
    </div>
  )
}

export default App
