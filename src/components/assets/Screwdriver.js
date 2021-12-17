import React from 'react';

const Screwdriver = (props) => {
    return(
        <a-entity {...props}>
            <a-cylinder rotation="0 0 90" position="0 0.01 0" radius="0.02" height="0.1" color="#1167B1"></a-cylinder>
            <a-cylinder rotation="0 0 90" position="-0.1 0.01 0" radius="0.005" height="0.2" color="grey">
                <a-box position="0 0.1075 0" rotation="0 0 90" height="0.002" width="0.015" depth="0.01" color="grey"></a-box>
                <a-box position="0.001 0.10 0" rotation="0 0 90" height="0.002" width="0.015" depth="0.01" color="grey"></a-box>
                <a-box position="-0.001 0.10 0" rotation="0 0 90" height="0.002" width="0.015" depth="0.01" color="grey"></a-box>
            </a-cylinder>
            <a-sphere radius="0.02" position="0.05 0.01 0" color="#1167B1"></a-sphere>
        </a-entity>
    );
};

export default Screwdriver;