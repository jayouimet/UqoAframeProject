import React from 'react';
import Door from '../assets/Door';
import Wall from '../assets/Wall';

const Garage = (props) => {
    return (
        <a-entity {...props}>
            <a-entity position="13 0 -11">
                <Wall width="14" depth="0.2" height="4" position="-6.5 0 -2" rotation="0 90 0" />
                <Wall width="13.5" depth="0.2" height="4" position="0.25 0 -9" />
                <Door position={"0.25 0 5"} wallWidth={13.5} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" />
                <Door position={"7 0 -2"} wallWidth={14} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" rotation="0 90 0"/>
            </a-entity>
        </a-entity>
    );
};

export default Garage;