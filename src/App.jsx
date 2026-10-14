import { Routes, Route } from 'react-router'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ProductsCapabilities from './pages/ProductsCapabilities.jsx'
import ManufacturingQuality from './pages/ManufacturingQuality.jsx'
import CustomPage from './pages/CustomPage.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="products-capabilities" element={<ProductsCapabilities />} />
        <Route path="manufacturing-quality" element={<ManufacturingQuality />} />
        <Route path="custom-page" element={<CustomPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
