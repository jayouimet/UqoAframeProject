import React from 'react';

const LightButton = ({groupName,position,rotation}) => {
    const lightControl = (e) => {
        let lights = document.querySelectorAll(`[data-light-group="${groupName}"]`);
        for(var i = 0; i < lights.length;i++)
            lights[i].setAttribute("intensity",(lights[i].getAttribute("intensity") === 0 ? 0.055 : 0));
    };
    return (
        <a-entity position={position} rotation={rotation}>
            <a-box depth="0.01" width="0.15" height="0.2" color="black"></a-box>
            <a-box onClick={lightControl} depth="0.03" width="0.1" height="0.1" color="blue" position="0 0 0.02" data-controller={groupName}></a-box>
        </a-entity>
    );
};

export default LightButton;