import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import DetailedServices from './sections/DetailedServices'
import DetailedProjects from './sections/DetailedProjects'
import DetailedContact from './sections/DetailedContact'
import Blog from './sections/Blog'
import DetailedAbout from './sections/DetailedAbout' // Import DetailedAbout component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<DetailedAbout />} /> {/* Add DetailedAbout route */}
        <Route path="/services" element={<DetailedServices />} />
        <Route path="/projects" element={<DetailedProjects />} />
        <Route path="/contact" element={<DetailedContact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  </StrictMode>,
)