import React from 'react';
import Door from '../assets/Door';
import Wall from '../assets/Wall';
import Window from '../assets/Window';

const RoomTwo = (props) => {
    return (
        <a-entity {...props}>
            <a-entity position="-15 0 12.5">
                <Wall width="15" depth="0.2" height="4" position="5 0 0" rotation="0 90 0" />
                <Door position={"0 0 -7.5"} wallWidth={10} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" />
                <Window position={"0 0 7.5"} wallWidth={10} wallHeight={4} windowHeight={1.6} windowWidth={3} depth="0.2" />
            </a-entity>
        </a-entity>
    );
};

export default RoomTwo;