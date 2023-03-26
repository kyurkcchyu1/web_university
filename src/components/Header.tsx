import React, {useEffect, useState} from 'react';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBContainer,
    MDBCollapse,
    MDBBtn
} from 'mdb-react-ui-kit';
import './Header.css'

export default function Header({showLogin, open}: any) {
    const [showBasic, setShowBasic] = useState(false);
    const [currentUser, setCurrentUser] = useState(false)
    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            setCurrentUser(true)
            console.log('true')
        }
    }, [showLogin,currentUser])
    const logOut = ()=>{
        localStorage.removeItem('currentUser')
        setCurrentUser(false)
    }

    return (
        <header>
            <MDBNavbar expand = 'md' light bgColor = 'white' className = "navbar">
                <MDBContainer>
                    <MDBCollapse navbar show = {showBasic}>
                        <MDBNavbarNav right className = 'mb-2 mb-lg-0'>
                            <MDBNavbarItem active>
                                <MDBNavbarLink aria-current = 'page' href = '#'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href = '#'>Features</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href = '#'>Pricing</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href = '#'>About</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                        {currentUser ?

                            <MDBBtn onClick = {logOut} outline rounded color = 'danger'>
                                LOGOUT
                            </MDBBtn> :
                            <MDBBtn onClick = {open} outline rounded color = 'success'>
                                LOGIN
                            </MDBBtn>}
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>

            <div className = 'p-5 bg-image' style = {{
                backgroundImage: "url('https://7themes.su/_ph/23/969642055.jpg?1676070473')",
                height: '700px'
            }}>
                <div className = 'mask' style = {{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                    <div className = 'header--content'>
                        <div className = 'text-white'>
                            <h1 className = 'mt-6'>BMW</h1>
                            <h4 className = 'mt-3'>The Ultimate Driving Machine</h4>
                            <MDBBtn tag = "a" outline size = "lg">
                                Посмотреть
                            </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}