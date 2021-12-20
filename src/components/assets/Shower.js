import React from 'react';

const Shower = ({color, ...props}) => {
    return (
        <a-entity {...props}>
            <a-box roughness="1" depth="4" width="2" height="0.2" color="darkgray"></a-box>
            <a-box roughness="1" depth="0.3" width="2" height="3" position="0 1.5 -1.85" color="darkgray"></a-box>
            <a-box roughness="1" depth="0.3" width="2" height="3" position="0 1.5 1.85" color="darkgray"></a-box>
            <a-box roughness="1" depth="3.4" width="0.3" height="1" position="-0.85 0.2 0" color="darkgray"></a-box>
            <a-box roughness="1" depth="3.4" width="0.3" height="3" position="0.85 1.5 0" color="darkgray"></a-box>

            <a-cylinder position="-0.9 2.9 0" rotation="0 90 90" radius="0.03" height="3.4" color="dimgray"></a-cylinder>

            <a-entity position="0 2.6 -1.65">
                <a-cylinder rotation="0 90 60" radius="0.03" height="0.2" color="dimgray"></a-cylinder>
                <a-cylinder position="0 0.05 0.18" rotation="0 90 90" radius="0.03" height="0.2" color="dimgray"></a-cylinder>
                <a-cylinder position="0 0 0.31" rotation="0 90 -40" radius="0.03" height="0.15" color="dimgray"></a-cylinder>
                <a-entity position="0 -0.05 0.35" rotation="0 90 -40">
                    <a-cone height="0.03" radius-bottom="0.1" radius-top="0.03" color="dimgray"></a-cone>
                    <a-cone position="0 -0.025 0" height="0.02" radius-bottom="0.12" radius-top="0.1" color="dimgray"></a-cone>
                    <a-cone position="0 -0.045 0" height="0.02" radius-bottom="0.13" radius-top="0.12" color="dimgray"></a-cone>
                </a-entity>
            </a-entity>

            <a-cylinder position="0 1.4 -1.7" rotation="90 0 0" radius="0.2" height="0.01" color="dimgray"></a-cylinder>
            <a-cylinder position="0 1.4 -1.7" rotation="90 0 0" radius="0.04" height="0.1" color="dimgray"></a-cylinder>
            <a-sphere position="0 1.4 -1.65" rotation="90 0 0" radius="0.04" color="dimgray"></a-sphere>

            <a-entity position="0 1.4 -1.65" rotation="-10 0 0">
                <a-cylinder scale="1 1 0.3" position="0 -0.07 0" radius="0.04" height="0.15" color="dimgray"></a-cylinder>
                <a-sphere scale="1 0.3 1" position="0 -0.14 0" rotation="90 0 0" radius="0.04" color="dimgray"></a-sphere>
            </a-entity>

            <a-circle position="0 0.11 1.2" rotation="-90 0 0" radius="0.2" color="gray"></a-circle>
        </a-entity>
    );
};

export default Shower;