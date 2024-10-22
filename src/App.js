import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Account from './Pages/Account'
import Contacts from './Pages/Contacts'
import Home from './Pages/Home'
import ProductInfo from './Pages/ProductInfo'
import About from './Components/HomeComp/About/About'
import Checkout from './Pages/Checkout'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/stg-app' element={<Home />} />
          <Route path='/account' element={<Account />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='/products' element={<Products category='All' />} />
          <Route
            path='/products/candles'
            element={<Products category='Candles' />}
          />
          <Route
            path='/products/Bath-Milks'
            element={<Products category='Bath Milks' />}
          />
          <Route
            path='/products/Bath-Bombs'
            element={<Products category='Bath Bombs' />}
          />
          <Route
            path='/products/Bath-Salts'
            element={<Products category='Bath Salts' />}
          />
          <Route
            path='/products/Shower-Streamers'
            element={<Products category='Shower Streamers' />}
          />
          <Route path='/productinfo'>
            <Route path=':productId' element={<ProductInfo />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
