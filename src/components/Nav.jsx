import { useState, useEffect } from 'react';
import './Nav.css';

const WA = 'https://wa.me/919497717371';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''} role="navigation" aria-label="Main navigation">
        <a href="/" className="nav-logo" aria-label="Effar Furniture – Home">
          <div className="logo-icon"><span aria-hidden="true">E</span></div>
          <div>
            <span className="brand">EFFAR</span>
            <span className="sub">Furniture</span>
          </div>
        </a>

        <ul className="nav-links" role="list">
          <li><a href="#catalogue">Catalogue</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#why">Why Us</a></li>
          <li><a href="#testimonials">Reviews</a></li>
          <li><a href="#service-area">Delivery</a></li>
          <li><a href="#wholesale">Wholesale</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href={WA} className="nav-cta" target="_blank" rel="noopener noreferrer">
              Get Quote
            </a>
          </li>
        </ul>

        <button
          className="hamburger"
          id="hamburger"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobileMenu"
          aria-label="Toggle mobile navigation"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${open ? ' open' : ''}`} id="mobileMenu" role="menu" aria-label="Mobile navigation">
        <a href="#catalogue" onClick={close} role="menuitem">Catalogue</a>
        <a href="#gallery" onClick={close} role="menuitem">Gallery</a>
        <a href="#why" onClick={close} role="menuitem">Why Us</a>
        <a href="#testimonials" onClick={close} role="menuitem">Reviews</a>
        <a href="#service-area" onClick={close} role="menuitem">Delivery</a>
        <a href="#wholesale" onClick={close} role="menuitem">Wholesale</a>
        <a href="#contact" onClick={close} role="menuitem">Contact</a>
        <a href={WA} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--whatsapp)' }} role="menuitem">
          💬 Get WhatsApp Quote
        </a>
      </div>
    </>
  );
}
