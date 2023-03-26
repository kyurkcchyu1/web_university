import React, {useEffect, useState} from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import FormCar from "./components/FormCar";
import Footer from "./components/Footer";
import {observer} from 'mobx-react-lite'
import { MDBSpinner } from 'mdb-react-ui-kit';
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
import LogIn from "./components/LogIn";

const App:React.FC = observer(() => {

    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
    const [showLogin,setShowLogin] = useState(false)
    // Store.setItems()
    useEffect(()=>{
        if(Store.data.length === 0){
            Store.setItems()
        }
    })
    return (
        <div>
            <Header showLogin={showLogin} open={()=>{setShowLogin(true)}}/>
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
            {Store.data.length>= 1
                ? <Content data = {Store.data}/>
                :<div className='text-center mt-3'>
                <MDBSpinner role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </MDBSpinner>
            </div>}
            <div className = "d-flex justify-content-center mt-3">
                <MDBBtn onClick = {toggleShow}>New</MDBBtn>
            </div>
            {showLogin && <LogIn close={()=>{setShowLogin(false)}}/>}
            <Footer/>
        </div>
    )
})
export default App
