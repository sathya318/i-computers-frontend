import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <ProductCard name="desktop" price = "100 000.00"image="https://i.pinimg.com/736x/74/5e/40/745e40762631a2d22efb8c6d71563e2c.jpg"/> 
      <ProductCard name="Phone" price = "80 000.00"image="https://i.pinimg.com/736x/74/5e/40/745e40762631a2d22efb8c6d71563e2c.jpg"/> 
      <ProductCard name="tablet" price = "100 000.00"image="https://i.pinimg.com/736x/74/5e/40/745e40762631a2d22efb8c6d71563e2c.jpg"/> 
      
    </>
  )
}

export default App
