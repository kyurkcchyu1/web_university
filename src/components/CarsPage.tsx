import React, {useState} from 'react';
import Store from "../Store";
import Content from "./Content";
import {
    MDBBtn, MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog, MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle,
    MDBSpinner
} from "mdb-react-ui-kit";
import FormCar from "./FormCar";
import {IAddedCar} from "../data";
import {observer} from "mobx-react-lite";

const CarsPage = observer( () => {
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
    return (
        <div>
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
            {Store.data.length >= 1
                ? <Content data = {Store.data}/>
                : <div className = 'text-center mt-3'>
                    <MDBSpinner role = 'status'>
                        <span className = 'visually-hidden'>Loading...</span>
                    </MDBSpinner>
                </div>}
            <div className = "d-flex justify-content-center mt-3">
                <MDBBtn onClick = {toggleShow}>New</MDBBtn>
            </div>
        </div>
    );
});

export default CarsPage;