import React from 'react';
import RedBox from './RedBox';
import BlueBox from './BlueBox';

const RedBlueBox = ({position, onClick, ...props}) => {
    return(
        <a-entity position={position} onClick={onClick}>
            <RedBox {...props}/>
            <BlueBox {...props}/>
        </a-entity>
    );
};

export default RedBlueBox;