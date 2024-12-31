import React from 'react';
import {animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, 
        FooterWrap, 
        FooterLinksContainer, 
        FooterLinksWrapper, 
        FooterLinkItems, 
        FooterLinkTitle,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        WebsiteRights,
        SocialIcons,
        SocialIconLink,
    		} 
        from './FooterElements';

const Footer = () => {

    //function that scrolls to top of page
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer id='footer'>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Products</FooterLinkTitle>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                        <FooterLinkTitle>Recepies</FooterLinkTitle>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle>Contact</FooterLinkTitle>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            Tradiheal Foods Centre
                        </SocialLogo>
                        <WebsiteRights>TFC © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.twitter.com/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer