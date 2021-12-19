import React from 'react';

const Freezer = (props) => {
    return(
        <a-entity {...props}>
            <a-box height="0.8" depth="1" width="1" position="0 0.42 0" color="#C0C0C0"></a-box>
            <a-plane side="double" height="0.01" width="1" position="0 0.825 0.492" rotation="0 0 0" color="black"></a-plane>
            <a-box height="0.01" depth="0.99" width="1" position="0 0.825 -0.005" color="#C0C0C0"></a-box>
            <a-box height="1.4" depth="1" width="1" position="0 1.53 0" color="#C0C0C0"></a-box>

            <a-sphere position="0.45 0.01 0.3" radius="0.02" color="black"></a-sphere>
            <a-sphere position="0.45 0.01 -0.3" radius="0.02" color="black"></a-sphere>
            <a-sphere position="-0.45 0.01 0.3" radius="0.02" color="black"></a-sphere>
            <a-sphere position="-0.45 0.01 -0.3" radius="0.02" color="black"></a-sphere>

            <a-box position="-0.4 1.53 0.55" height="1.2" width="0.05" depth="0.02" color="#A6A6A6"></a-box>
            <a-box position="-0.4 2.13 0.53" height="0.02" width="0.05" depth="0.06" color="#A6A6A6"></a-box>
            <a-box position="-0.4 0.93 0.53" height="0.02" width="0.05" depth="0.06" color="#A6A6A6"></a-box>

            <a-box position="0 0.76 0.55" height="0.05" width="0.85" depth="0.02" color="#A6A6A6"></a-box>
            <a-box position="-0.425 0.76 0.53" height="0.05" width="0.02" depth="0.06" color="#A6A6A6"></a-box>
            <a-box position="0.425 0.76 0.53" height="0.05" width="0.02" depth="0.06" color="#A6A6A6"></a-box>
        </a-entity>
    );
};

export default Freezer;