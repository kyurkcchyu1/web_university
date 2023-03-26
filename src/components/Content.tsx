import React from 'react';
import Card from './Card'
import {IAddedCar} from "../data";

interface ContentProps {
    data: IAddedCar[]
}

const Content: React.FC<ContentProps> = ({data}) => {
    return (
        <div className = "content d-flex flex-wrap gap-4 justify-content-center">
            {data.map((el: IAddedCar) => <Card key = {el.id} {...el}/>)}
        </div>
    );
}
export default Content