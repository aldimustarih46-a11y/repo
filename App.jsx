import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Projects from './pages/projects'
import Contact from './pages/contact'


export default function App() {
return (
<div className="app">
<Navbar />


<Routes>
<Route path="/" element={<Home />} />
<Route path="/projects" element={<Projects />} />
<Route path="/contact" element={<Contact />} />
<Route path="*" element={<div className="notfound">404 – Halaman Tidak Ditemukan</div>} />
</Routes>
</div>
)
}