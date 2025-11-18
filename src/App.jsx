import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Product from './pages/Product'

function ProductRouteWrapper() {
  const { slug } = useParams()
  return <Product slug={slug} />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/products/:slug" element={<ProductRouteWrapper />} />
    </Routes>
  )
}
