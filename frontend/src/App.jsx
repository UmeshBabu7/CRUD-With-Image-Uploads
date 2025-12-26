import './App.css'
import ShowProducts from './components/ShowProducts'
import AddProduct from './components/AddProduct'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBarMenu from './components/NavBarMenu'

function App () {
  return (
    <div className='App'>
      <Router>
        <NavBarMenu />
        <Routes>
          <Route path="/" element={<ShowProducts />} />
          <Route path="/addProduct" element={<AddProduct />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
