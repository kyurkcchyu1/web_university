import React, {useCallback, useState} from 'react';
import {
    MDBInput,
    MDBBtn
} from 'mdb-react-ui-kit';
import './FormCar.css'
import {IAddedCar} from "../data";


export default function FormCar({createCar}) {
    const [name,setName] = useState('')
    const [year,setYear] = useState('')
    const [img,setImg] = useState('')
    const [descr,setDescr] = useState('')
    const handleSubmit:(event: React.MouseEvent<HTMLButtonElement>) => void = () => {
        event.preventDefault()
        const newItem : IAddedCar={
            name:name,
            year:year,
            imageUrl:img,
            descrip:descr
        }
        createCar(newItem)
        console.log(newItem)
        setName('')
        setYear('')
        setImg('')
        setDescr('')
    }

    return (
        <form className='formcar' onSubmit={handleSubmit} >
            <MDBInput id='form4Example1' wrapperClass='mb-4'  label='Name' required={true}
                      value={name}
                      onChange={(e)=>{setName(e.target.value)}}
            />
            <MDBInput type="number" id='form4Example1' wrapperClass='mb-4' label='Year' required={true}
                      value={year}
                      onChange={(e)=>{setYear(e.target.value)}}
            />
            <MDBInput id='form4Example1' wrapperClass='mb-4' label='ImageUrl' required={true}
                      value={img}
                      onChange={(e)=>{setImg(e.target.value)}}
            />
            <MDBInput id='form4Example1' wrapperClass='mb-4' label='Description' required={true}
                      value={descr}
                      onChange={(e)=>{setDescr(e.target.value)}}
            />
            <MDBBtn type='submit' className='mb-4' block >
                Send
            </MDBBtn>

        </form>
    );
}