import React from 'react';
import Lights from '../assets/Lights';
import LightButton from '../assets/LightButton';

const LightController = ({groupName,buttonPos,rotation,buttonOff,...props}) => {
    if(buttonOff){
        return(
            <a-entity>
                <Lights groupName={groupName} {...props}></Lights>
            </a-entity>
        );
    } else {
        return (
            <a-entity>
                <Lights groupName={groupName} {...props}></Lights>
                <LightButton groupName={groupName} position={buttonPos} rotation={rotation}></LightButton>
            </a-entity>
        );
    }
};

export default LightController;