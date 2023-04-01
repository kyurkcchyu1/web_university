import React, {useEffect, useState} from 'react';
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
import useStore from "../Store/useStore";

const CarsPage = observer( () => {
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
    const carsStore = useStore();
    useEffect(() => {
        if (carsStore.data.length === 0) {
            carsStore.setItems()
        }
    })

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
                            <FormCar createCar = {(item: IAddedCar) => carsStore.createNewItem(item)}/>
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color = 'secondary' onClick = {toggleShow}>
                                Close
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            {carsStore.data.length >= 1
                ? <Content data = {carsStore.data}/>
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