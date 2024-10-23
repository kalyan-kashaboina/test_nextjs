// components/Nav.tsx
"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import './navbar.css';

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav">
            <div className="container">
                <Link href="/" className="logo">MyLogo</Link>
                <button className="menuToggle" onClick={toggleMenu}>
                    ☰
                </button>
                <ul className={`navLinks ${isOpen ? 'open' : ''}`}>
                    <li><Link href="/home">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
