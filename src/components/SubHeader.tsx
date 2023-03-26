import React from 'react';
import {MDBBtn} from 'mdb-react-ui-kit';

const SubHeader: React.FC = () => {

    return (
        <section className = 'p-5 bg-image' style = {{
            backgroundImage: "url('https://7themes.su/_ph/23/969642055.jpg?1676070473')",
            height: '700px'
        }}>
            <div className = 'mask' style = {{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                <div className = 'header--content'>
                    <div className = 'text-white'>
                        <h1 className = 'mt-6'>BMW</h1>
                        <h4 className = 'mt-3'>The Ultimate Driving Machine</h4>
                        <MDBBtn tag = "a" outline size = "lg">
                            Посмотреть
                        </MDBBtn>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default SubHeader;