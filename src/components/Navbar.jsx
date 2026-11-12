import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from './CartContext'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [bump, setBump] = useState(false)
  const { totalCount } = useCart()
  const prevCount = useRef(totalCount)

  useEffect(() => {
    if (totalCount !== prevCount.current) {
      setBump(true)
      const timer = setTimeout(() => setBump(false), 320)
      prevCount.current = totalCount
      return () => clearTimeout(timer)
    }
  }, [totalCount])

  function toggleMenu() {
    setMenuOpen((open) => !open)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          Savory Bites
        </NavLink>

        <div className="navbar-right">
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <NavLink to="/" onClick={closeMenu} end>
              Home
            </NavLink>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
            <NavLink to="/menu" onClick={closeMenu}>
              Menu
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </nav>

          <NavLink to="/cart" className="cart-link" aria-label="View cart">
            <span className="cart-label">Cart</span>
            <span className={`cart-count ${bump ? 'bump' : ''}`}>{totalCount}</span>
          </NavLink>

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className={menuOpen ? 'top-open' : ''} />
            <span className={menuOpen ? 'mid-open' : ''} />
            <span className={menuOpen ? 'bottom-open' : ''} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
