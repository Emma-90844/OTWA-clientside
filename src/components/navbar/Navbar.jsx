import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
      
            <span className='logo'>OTWA <span className='logo-text'>UG</span></span>
            
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar