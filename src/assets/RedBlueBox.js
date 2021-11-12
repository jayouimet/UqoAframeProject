import React from 'react';
import RedBox from './RedBox';
import BlueBox from './BlueBox';

const RedBlueBox = ({position, onclick, ...props}) => {
    return(
        <a-entity position={position} onClick={onclick}>
            <RedBox {...props}/>
            <BlueBox {...props}/>
        </a-entity>
    );
};

export default RedBlueBox;