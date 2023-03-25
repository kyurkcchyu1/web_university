import React, {useState} from 'react';
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

export default function Header() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <header>
            <MDBNavbar expand = 'md' light bgColor = 'white' className="navbar">
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
                        <MDBBtn outline rounded color='success'>
                            LOGIN
                        </MDBBtn>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>

            <div
                className='p-5 bg-image'
                style={{ backgroundImage: "url('https://7themes.su/_ph/23/969642055.jpg?1676070473')", height: '700px' }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='header--content'>
                        <div className='text-white'>
                            <h1 className='mb-6'>BMW</h1>
                            <h4 className='mb-3'>The Ultimate Driving Machine</h4>
                            <MDBBtn tag="a" outline size="lg">
                                Посмотреть
                            </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}