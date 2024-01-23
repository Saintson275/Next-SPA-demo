// Navbar.tsx
import React from 'react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Navbar({ activeSection, setActiveSection }: NavbarProps): JSX.Element {
  const handleClick = (targetId: string) => {
    setActiveSection(targetId);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{ 
        position: 'fixed', 
        top: 0, left: 0, 
        width: '100%', 
        height:'10%', 
        backgroundColor: 'grey', 
        zIndex: 1000,}}>
      <button
       style={{float: 'right', marginLeft:10,paddingLeft: 20, paddingRight:20, height:'100%', width:'20%', backgroundColor: 'grey'}}
       onClick={() => handleClick('home-section')} 
       role="button" tabIndex={0} 
       className={activeSection === 'home-section' ? 'active' : ''}>
        Home
      </button>

      <button
        style={{float: 'right', marginLeft:10,paddingLeft: 20, paddingRight:20, height:'100%', width:'20%', backgroundColor: 'grey'}} 
        onClick={() => handleClick('about-section')} 
        role="button" tabIndex={0} 
        className={activeSection === 'about-section' ? 'active' : ''}>
        About
      </button>

      <button
        style={{float: 'right', marginLeft:10,paddingLeft: 20, paddingRight:20, height:'100%', width:'20%', backgroundColor: 'grey'}} 
        onClick={() => handleClick('products-section')} 
        role="button" tabIndex={0} 
        className={activeSection === 'products-section' ? 'active' : ''}>
        Products
      </button>

      <button
        style={{ float: 'right', marginLeft:10,paddingLeft: 20, paddingRight:20, height:'100%', width:'20%', backgroundColor: 'grey'}} 
        onClick={() => handleClick('contact-section')} 
        role="button" tabIndex={0} 
        className={activeSection === 'contact-section' ? 'active' : ''}>
        Contact
      </button>
      {/* Add another page */}
    </nav>
  );
}
