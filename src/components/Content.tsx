import React, {useState} from 'react';
import Card from './Card'
import './Content.css'
import {IAddedCar} from "../data";


export default function Content({data}:any) {

    return (
        <div className="content d-flex flex-wrap gap-4 justify-content-center">
            {data.map((el:IAddedCar)=><Card key={el.descrip} {...el}/>)}
        </div>
    );
}