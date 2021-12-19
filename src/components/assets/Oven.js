import React from 'react';

const Oven = (props) => {
    return(
        <a-entity {...props}>



            <a-box height="0.3" depth="1" width="1.2" position="0 0.17 0" color="#C0C0C0"></a-box>
            <a-box height="0.01" depth="0.99" width="1.19" position="0 0.325 0" color="black"></a-box>
            <a-box height="0.01" depth="0.99" width="1.2" position="0 0.325 -0.005" color="#C0C0C0"></a-box>
            <a-box height="0.6" depth=".95" width="1.2" position="0 0.63 -0.025" color="#C0C0C0"></a-box>
            <a-box height="0.5" depth=".95" width="1.1" position="0 0.63 0" color="black"></a-box>
            <a-box height="0.6" depth="1" width="0.15" position="-0.525 0.63 0" color="#C0C0C0"></a-box>
            <a-box height="0.6" depth="1" width="0.15" position="0.525 0.63 0" color="#C0C0C0"></a-box>
            <a-box height="0.1" depth="1" width="1.2" position="0 0.88 0" color="#C0C0C0"></a-box>
            <a-box height="0.1" depth="1" width="1.2" position="0 0.38 0" color="#C0C0C0"></a-box>

            <a-box rotation="-8 0 0" height="0.341" depth="0.1" width="1.2" position="0 1 -0.42" color="#C0C0C0">
                <a-cylinder position="-0.4 0.05 0.05" rotation="90 0 0" height="0.02" radius="0.04" color="black"></a-cylinder>
                <a-cylinder position="-0.265 0.05 0.05" rotation="90 0 0" height="0.02" radius="0.04" color="black"></a-cylinder>
                <a-cylinder position="0.265 0.05 0.05" rotation="90 0 0" height="0.02" radius="0.04" color="black"></a-cylinder>
                <a-cylinder position="0.4 0.05 0.05" rotation="90 0 0" height="0.02" radius="0.04" color="black"></a-cylinder>
                <a-box position="0 0.05 0.05" height="0.15" width="0.3" depth="0.02" color="black"></a-box>
            </a-box>
            <a-box height="0.35" depth="0.1" width="1.2" position="0 1 -0.45" color="#C0C0C0"></a-box>
            
            <a-cylinder position="-0.3 0.9 0.26" height="0.07" radius="0.15" color="black"></a-cylinder>
            <a-cylinder position="0.3 0.9 -0.18" height="0.07" radius="0.15" color="black"></a-cylinder>
            <a-cylinder position="-0.3 0.9 -0.18" height="0.07" radius="0.17" color="black"></a-cylinder>
            <a-cylinder position="0.3 0.9 0.26" height="0.07" radius="0.17" color="black"></a-cylinder>

            <a-sphere position="0.55 0.01 0.45" radius="0.02" color="black"></a-sphere>
            <a-sphere position="0.55 0.01 -0.45" radius="0.02" color="black"></a-sphere>
            <a-sphere position="-0.55 0.01 0.45" radius="0.02" color="black"></a-sphere>
            <a-sphere position="-0.55 0.01 -0.45" radius="0.02" color="black"></a-sphere>

            <a-box position="0 0.82 0.52" height="0.05" width="1" depth="0.02" color="#A6A6A6"></a-box>
            <a-box position="-0.5 0.82 0.50" height="0.05" width="0.02" depth="0.06" color="#A6A6A6"></a-box>
            <a-box position="0.5 0.82 0.50" height="0.05" width="0.02" depth="0.06" color="#A6A6A6"></a-box>

            <a-box position="0 0.26 0.52" height="0.05" width="1" depth="0.02" color="#A6A6A6"></a-box>
            <a-box position="-0.5 0.26 0.50" height="0.05" width="0.02" depth="0.06" color="#A6A6A6"></a-box>
            <a-box position="0.5 0.26 0.50" height="0.05" width="0.02" depth="0.06" color="#A6A6A6"></a-box>
        </a-entity>
    );
};

export default Oven;