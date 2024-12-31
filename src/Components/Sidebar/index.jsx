import React from 'react';
import { SidebarContainer, 
        Icon, 
        CloseIcon, 
        SidebarWrapper, 
        SidebarMenu, 
        SidebarLink, 
        SideBtnWrap, 
        SidebarRoute 
        } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                        Products
                    </SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>
                        About Us
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
                        Recepies
                    </SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute href="tel:+919344902568">
                        Call 934-490-2568
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar