import React from 'react';
import Light from './Light';

const Lights = ({groupName, ...props}) => {
    return(
        <a-entity {...props}>
            <a-torus radius="0.6" radius-tubular="0.02" rotation="90 0 0"></a-torus>
            <Light groupName={groupName} position="0.6 -0.04 0"></Light>
            <Light groupName={groupName} position="-0.6 -0.04 0"></Light>
            <Light groupName={groupName} position="0 -0.04 0.6"></Light>
            <Light groupName={groupName} position="0 -0.04 -0.6"></Light>
        </a-entity>
    );
};

export default Lights;