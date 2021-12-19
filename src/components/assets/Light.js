import React from 'react';

const Light = ({groupName, ...props}) => {
    return(
        <a-entity {...props}>
            <a-cylinder height="0.02" radius="0.02" position="0 0 0" color="black"></a-cylinder>
            <a-light data-light-group={groupName} color="white" type="spot" angle="91" penumbra="0.07" rotation="-90 0 0" intensity="0.055" ></a-light>
        </a-entity>
    );
};

export default Light;