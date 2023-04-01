import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem, MDBContainer,
} from 'mdb-react-ui-kit';
import first from '../assets/carousel1.png'
import second from '../assets/carousel2.png'
import third from '../assets/carousel3.png'

const About: React.FC = () => {
    return (
        <MDBContainer>
            <MDBCarousel showControls showIndicators>
                <MDBCarouselItem className = 'w-100 d-block' itemId = {1}
                                 src = {first} alt = '...'>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </MDBCarouselItem>
                <MDBCarouselItem className = 'w-100 d-block' itemId = {2}
                                 src = {second} alt = '...'>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselItem>
                <MDBCarouselItem className = 'w-100 d-block' itemId = {3}
                                 src = {third} alt = '...'>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselItem>
            </MDBCarousel>
        </MDBContainer>
    );
}
export default About;