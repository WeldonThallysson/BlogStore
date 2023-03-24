import { Link } from "react-router-dom"
import './Navbar.css'
import './Response-navbar.css'

const Navbar = () => {
  return (
    
    <nav className='navbar'>
        <h2>
           <Link to={`/`}> Blog Store  </Link>
        </h2>
        <ul>
            <li>
            <Link className="home-nav" to={`/`} > Home </Link>
            </li>
            <li>
                <Link className="new-btn" to={`/new`} > Novo Post </Link>
            </li>
        </ul>
    </nav>

  )
}

export default Navbar