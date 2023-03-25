import React, {useState} from 'react';
import Card from './Card'
import './Content.css'
import {ICar} from "../data";


export default function Content({data}:any) {

    return (
        <div className="content d-flex flex-wrap gap-4 justify-content-center">
            {data.map((el:ICar)=><Card key={el.descrip} {...el}/>)}
        </div>
    );
}