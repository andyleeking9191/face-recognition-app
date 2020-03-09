import React from 'react';
import Tilt from 'react-tilt';
import robot from './robot.png';
import './Logo.css';

const Logo = () => {
    return(
        <div className='ma4 mt0'>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa3">
                <img alt='' style={{paddingTop: '5px', width: '100%', height: '100%'}} src={robot}/> </div>
        </Tilt>
        </div>
    )
}

export default Logo;