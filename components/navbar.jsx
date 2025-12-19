import { Link, useLocation } from 'react-router-dom'


export default function Navbar() {
const location = useLocation()


return (
<nav className="navbar">
<span className="logo">ALDI</span>


<div className="nav-links">
<Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
<Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
<Link to="/contact" className="contact-btn">Contact</Link>
</div>
</nav>
)
}