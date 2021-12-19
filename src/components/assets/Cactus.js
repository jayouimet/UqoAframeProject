import React from 'react';

const Cactus = (props) => {
    return(
        <a-entity {...props}>
            <a-box height="0.3" depth="0.05" width="0.35" position="0 0.15 0.15" color="#6E1005"></a-box>
            <a-box height="0.3" depth="0.05" width="0.35" position="0 0.15 -0.15" color="#6E1005"></a-box>
            <a-box height="0.3" depth="0.35" width="0.05" position="0.15 0.15 0" color="#6E1005"></a-box>
            <a-box height="0.3" depth="0.35" width="0.05" position="-0.15 0.15 0" color="#6E1005"></a-box>
            <a-box height="0.24" depth="0.28" width="0.28" position="0 0.12 0" color="#674422"></a-box>

            <a-cylinder position="0 0.5 0" height="0.5" radius="0.06" color="darkgreen"></a-cylinder>
            <a-sphere position="0 0.75 0" radius="0.06" color="darkgreen"></a-sphere>

            <a-cylinder rotation="0 0 90" position="-0.1 0.5 0" height="0.2" radius="0.04" color="darkgreen"></a-cylinder>
            <a-sphere position="-0.2 0.5 0" radius="0.04" color="darkgreen"></a-sphere>
            <a-cylinder position="-0.2 0.6 0" height="0.2" radius="0.04" color="darkgreen"></a-cylinder>
            <a-sphere position="-0.2 0.7 0" radius="0.04" color="darkgreen"></a-sphere>

            <a-cylinder rotation="0 0 90" position="0.1 0.4 0" height="0.2" radius="0.04" color="darkgreen"></a-cylinder>
            <a-sphere position="0.2 0.4 0" radius="0.04" color="darkgreen"></a-sphere>
            <a-cylinder position="0.2 0.5 0" height="0.2" radius="0.04" color="darkgreen"></a-cylinder>
            <a-sphere position="0.2 0.6 0" radius="0.04" color="darkgreen"></a-sphere>
        </a-entity>
    );
};

export default Cactus;