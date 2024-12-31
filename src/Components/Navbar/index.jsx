import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';
import logo from '../.././images/company-logo.png';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    //when scroll past 80px, trigger header background
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <img src={logo} alt="Tradiheal Foods Centre" onClick={toggleHome} />
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
														<NavItem>
                                <NavLinks to="Products"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>Products</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="About Us"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>About Us</NavLinks>
                            </NavItem>
														<NavItem>
                                <NavLinks to="Recipies"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>Recipies</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="contact"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>Contact</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
													<NavBtnLink href="tel:+919344902568">Call 934-490-2568</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;