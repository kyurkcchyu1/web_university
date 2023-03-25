import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';

export default function Card(props : any) {
    return (
        <MDBCard style={{ width: '18rem'}}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src={props.imageUrl} fluid alt='...' />
                <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle>{props.name} {props.year}</MDBCardTitle>
                <MDBCardText>
                    {props.descrip}
                </MDBCardText>
                <MDBBtn href='#'>More</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    );
}