import React from 'react';

const Hammer = (props) => {
    return(
        <a-entity {...props}>
            <a-cylinder rotation="0 0 90" position="0 0.01 0" radius="0.02" height="0.3" color="#5D2906"></a-cylinder>
            <a-sphere radius="0.02" position="0.15 0.01 0" color="#5D2906"></a-sphere>
            <a-box height="0.075" depth="0.2" width="0.1" position="-0.2 0.01 0" color="#595951"></a-box>
        </a-entity>
    );
};

export default Hammer;