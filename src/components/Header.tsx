import React, {useEffect, useState} from 'react';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBContainer,
    MDBCollapse,
    MDBBtn
} from 'mdb-react-ui-kit';
import {NavLink} from "react-router-dom";

const Header: React.FC = ({showLogin, open, exit}: any) => {
    const [currentUser, setCurrentUser] = useState(false)
    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            setCurrentUser(true)
        }
    }, [showLogin, currentUser])
    const logOut = () => {
        localStorage.removeItem('currentUser')
        setCurrentUser(false)
        exit()
    }

    return (
        <header>
            <MDBNavbar expand = 'md' light bgColor = 'white' className = "navbar">
                <MDBContainer>
                    <MDBCollapse navbar>
                        <MDBNavbarNav right className = 'mb-2 mb-lg-0 links'>
                            <MDBNavbarItem active>
                                <NavLink className="links-color" to = {'/'}>Home</NavLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <NavLink className="links-color" to = '/cars'>Cars</NavLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <NavLink className="links-color" to = '/about'>About</NavLink>
                            </MDBNavbarItem>

                        </MDBNavbarNav>
                        {currentUser ?
                            <MDBBtn onClick = {logOut} outline rounded color = 'danger'>
                                LOGOUT
                            </MDBBtn> :
                            <MDBBtn onClick = {open} outline rounded color = 'success'>
                                <NavLink to = '/login'>LOGIN</NavLink>
                            </MDBBtn>}
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </header>
    );
}
export default Header;