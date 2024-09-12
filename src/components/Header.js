import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className={`nav ${isMenuOpen ? "navOpen" : ''}`}>
        <ul className="menu">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/library">Library</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/newsletter">Newsletter</Link></li>
          <li><Link href="/instructions">Instructions</Link></li>
        </ul>
      </nav>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className="logo">
        <Link href="/">Logo</Link>
      </div>
    </header>
  );
}
