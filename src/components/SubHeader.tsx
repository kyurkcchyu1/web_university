import React from 'react';
import {NavLink} from "react-router-dom";

const SubHeader: React.FC = () => {

    return (
        <section className = 'p-5 bg-image parallax'>
            <div className = 'mask' style = {{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                <div className = 'header--content'>
                    <div className = 'text-white'>
                        <h1 className = 'mt-6'>BMW</h1>
                        <h4 className = 'mt-3'>The Ultimate Driving Machine</h4>
                        <button className="check">
                            <NavLink to = '/cars'>ПОСМОТРЕТЬ</NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default SubHeader;