import React, {useState} from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import FormCar from "./components/FormCar";
import Footer from "./components/Footer";
import {observer} from 'mobx-react-lite'
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import Store from './Store'
import {IAddedCar} from "./data";

const App:React.FC = observer(() => {

    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);

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
                            <FormCar createCar = {(item: IAddedCar) => Store.createNewItem(item)}/>
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color = 'secondary' onClick = {toggleShow}>
                                Close
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            <Content data = {Store.data}/>
            <div className = "d-flex justify-content-center mt-3">
                <MDBBtn onClick = {toggleShow}>New</MDBBtn>
            </div>
            <Footer/>
        </div>
    )
})
export default App
