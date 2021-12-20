import React from 'react';
import Wall from '../assets/Wall';
import Window from '../assets/Window';

const Bathroom = (props) => {
    return (
        <a-entity {...props}>
            <a-entity position="-25 0 0">
                <Wall width="10" depth="0.2" height="4" position="0 0 5" />
                <Wall width="10" depth="0.2" height="4" position="0 0 -5" />
                <Window position="-5 0 0" wallWidth={10} wallHeight={4} windowHeight={1.6} windowWidth={3} depth={0.2} rotation="0 -90 0"/>
            </a-entity>
        </a-entity>
    );
};

export default Bathroom;