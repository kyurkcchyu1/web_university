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
import {IAddedCar} from "../data";

const Card:React.FC<IAddedCar> = ({name, year,imageUrl, descrip}) => {
    return (
        <MDBCard style={{ width: '18rem'}}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src={imageUrl} fluid alt='...' />
                <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle>{name} {year}</MDBCardTitle>
                <MDBCardText>
                    {descrip}
                </MDBCardText>
                <MDBBtn href='#'>More</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    );
}
export default Card