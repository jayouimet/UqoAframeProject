import React from 'react';
import Bath from '../assets/Bath';
import Shower from '../assets/Shower';
import KitchenSink from '../assets/KitchenSink';
import Wall from '../assets/Wall';
import Window from '../assets/Window';

const Bathroom = (props) => {
    return (
        <a-entity {...props}>
            <a-entity position="-25 0 0">
                <Wall width="10" depth="0.2" height="4" position="0 0 5" />
                <Wall width="10" depth="0.2" height="4" position="0 0 -5" />
                <Window position="-5 0 0" wallWidth={10} wallHeight={4} windowHeight={1.6} windowWidth={3} depth={0.2} rotation="0 -90 0"/>
                <a-entity position="0 -2 0">
                    <Bath rotation="0 -90 0" position="2.8 0 3.8"/>
                    <Shower rotation="0 -90 0" position="-2.8 0 3.8"/>
                    <KitchenSink scale="1.3 1.3 1.3" position="0 0 -4.3"/>
                </a-entity>
            </a-entity>
        </a-entity>
    );
};

export default Bathroom;