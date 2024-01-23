
'use client'
import Link from 'next/link';
import About from './[about]/page';
import Homepage from './[homepage]/page';
import Products from './[products]/page';
import Contact from './[contact]/page';
import { Navbar } from '../ui/Navbar';
import React, { useState } from 'react';
export default function Home() {
  const [activeSection, setActiveSection] = useState("home-section");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection}/>
      <div>
        
        <section id="home-section">
        <Homepage/>
        </section>
        

        <section id="about-section">
            {/* Content for the About section */}
            <About params={{
                about: 'john'
            }} />
        </section>

        <section id="products-section">
            <Products/>
        </section>

        <section id="contact-section">
            <Contact/>
        </section>
      </div>
    </main>
  );
}
