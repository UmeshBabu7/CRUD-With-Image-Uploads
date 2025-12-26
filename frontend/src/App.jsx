import './App.css'
import ShowProducts from './components/ShowProducts'
import AddProduct from './components/AddProduct'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBarMenu from './components/NavBarMenu'
import ProductDetail from './components/ProductDetail'

function App () {
  return (
    <div className='App'>
      <Router>
        <NavBarMenu />
        <Routes>
          <Route path="/" element={<ShowProducts />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/:id/" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
