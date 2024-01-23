import Link from 'next/link';
// 'use client'
// import React from 'react';
// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import About from './dashboard/[about]/page';
import Dashboard from './dashboard/page';
import { Navbar } from './ui/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex min-h-screen flex-col items-center p-24">
        <h1>Welcome to SPAs on Next.js</h1>
        <Link style={{color:'blue'}} href='/dashboard'>Explore</Link>
      </div>
    </main>
  );
}
