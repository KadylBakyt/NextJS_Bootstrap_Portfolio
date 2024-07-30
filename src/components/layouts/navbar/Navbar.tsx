"use client" 

import Link from 'next/link'
import { useEffect, useState } from 'react';
import { usePathname, useParams } from 'next/navigation';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ThemeSwitcher from '@/components/common/themeSwitcher/ThemeSwitcher';

function Navigationbar() {
    return (
        <Navbar id="navbar" expand="lg" className="fixed-top bg-dark text-light">
            <Container className='container d-flex align-items-center justify-content-between'>
                <Navbar.Brand>
                    <ThemeSwitcher/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0"></Nav>
                    <Nav className="me-2 my-2 my-lg-0"
                    >
                        <Link className="nav-link text-uppercase text-light" href="/#hero"> Home</Link>
                        <Link className="nav-link text-uppercase text-light" href="/#about"> About</Link>
                        <Link className="nav-link text-uppercase text-light" href="/#work"> Work</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigationbar;