import {useState} from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import FormCar from "./components/FormCar";
import Footer from "./components/Footer";
import {data, IAddedCar} from "./data";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter, MDBIcon,
} from 'mdb-react-ui-kit';

export default function App() {
    const [cars, setCars] = useState(data)
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
    const createNewItem = (item: IAddedCar) => {
        setCars(prevState => [...prevState, item])
        console.log(cars)
        toggleShow()
    }


    return (
        <div>
            <Header/>
            <MDBModal show = {basicModal} setShow = {setBasicModal} tabIndex = '-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Adding a new car</MDBModalTitle>
                            <MDBBtn className = 'btn-close' color = 'none' onClick = {toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <FormCar createCar = {(item: IAddedCar) => createNewItem(item)}/>
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color = 'secondary' onClick = {toggleShow}>
                                Close
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            <Content data = {cars}/>
            <div className = "d-flex justify-content-center mt-3">
                <MDBBtn onClick = {toggleShow}>New</MDBBtn>
            </div>
            <Footer/>
        </div>
    )
}

