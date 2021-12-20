import React from 'react';

const Bath = ({color, ...props}) => {
    return (
        <a-entity {...props}>
            <a-box roughness="1" depth="4" width="2" height="0.2" color="dimgray"></a-box>
            <a-box roughness="1" depth="0.3" width="2" height="1.5" position="0 0.2 -1.85" color="dimgray"></a-box>
            <a-box roughness="1" depth="0.3" width="2" height="1.5" position="0 0.2 1.85" color="dimgray"></a-box>
            <a-box roughness="1" depth="3.4" width="0.3" height="1.5" position="-0.85 0.2 0" color="dimgray"></a-box>
            <a-box roughness="1" depth="3.4" width="0.3" height="1.5" position="0.85 0.2 0" color="dimgray"></a-box>

            <a-entity position="0 0.95 -1.5" scale="3">
                <a-box position="0 0.1 -0.325" color="#505050" width="0.04" height="0.2" depth="0.04"></a-box>
                <a-box position="0 0.15 -0.225" color="#505050" width="0.04" height="0.02" depth="0.2"></a-box>

                <a-box position="0 0.19 -0.325" color="#505050" width="0.05" height="0.04" depth="0.05"></a-box>
                <a-box position="0 0.19 -0.275" color="#505050" width="0.04" height="0.01" depth="0.1"></a-box>
            </a-entity>

            <a-circle position="0 0.11 1.2" rotation="-90 0 0" radius="0.2" color="gray"></a-circle>
        </a-entity>
    );
};

export default Bath;