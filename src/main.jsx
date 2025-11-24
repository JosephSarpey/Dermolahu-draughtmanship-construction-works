import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import DetailedServices from './pages/DetailedServices'
import DetailedProjects from './pages/DetailedProjects'
import DetailedContact from './pages/DetailedContact'
import Blog from './pages/Blog'
import DetailedAbout from './pages/DetailedAbout'
import Booking from './pages/Booking' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<DetailedAbout />} />
        <Route path="/services" element={<DetailedServices />} />
        <Route path="/projects" element={<DetailedProjects />} />
        <Route path="/contact" element={<DetailedContact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/booking" element={<Booking />} /> 
      </Routes>
    </Router>
  </StrictMode>,
)