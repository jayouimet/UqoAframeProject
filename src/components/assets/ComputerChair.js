import React from 'react';

const ComputerChair = (props) => {
    return (
        <a-entity {...props}>
            <a-entity position="0 0.3 0">
                <a-entity position="0 0.27 0">
                    <a-cylinder position="0 -0.05 0" rotation="0 0 90" color="black" radius="0.05" height="0.2"></a-cylinder>
                    <a-cylinder position="0 -0.07 -0.05" rotation="0 0 90" color="black" radius="0.05" height="0.2"></a-cylinder>
                    <a-cylinder position="0 -0.08 -0.1" rotation="0 0 90" color="black" radius="0.05" height="0.2"></a-cylinder>
                    <a-cylinder position="0 -0.09 -0.15" rotation="0 0 90" color="black" radius="0.05" height="0.2"></a-cylinder>
                    <a-cylinder position="0 -0.1 -0.2" rotation="0 0 90" color="black" radius="0.05" height="0.2"></a-cylinder>
                    <a-cylinder position="0 -0.1 -0.25" rotation="0 0 90" color="black" radius="0.05" height="0.2"></a-cylinder>
                    <a-cylinder position="0 -0.09 -0.3" rotation="0 0 90" color="black" radius="0.05" height="0.2"></a-cylinder>
                    <a-cylinder position="0 -0.07 -0.35" rotation="0 0 90" color="black" radius="0.05" height="0.2"></a-cylinder>
                    <a-cylinder position="0 -0.04 -0.37" rotation="0 0 90" color="black" radius="0.05" height="0.2"></a-cylinder>
                    <a-cylinder position="0 -0.01 -0.39" rotation="0 0 90" color="black" radius="0.05" height="0.2"></a-cylinder>
                    <a-cylinder position="0 0.03 -0.41" rotation="0 0 90" color="black" radius="0.05" height="0.2"></a-cylinder>
                    <a-cylinder position="0 0.07 -0.42" rotation="0 0 90" color="black" radius="0.05" height="0.2"></a-cylinder>
                    <a-cylinder position="0 0.12 -0.42" rotation="0 0 90" color="black" radius="0.05" height="0.2"></a-cylinder>
                    <a-cylinder position="0 0.17 -0.42" rotation="0 0 90" color="black" radius="0.05" height="0.2"></a-cylinder>
                    <a-cylinder position="0 0.21 -0.42" rotation="0 0 90" color="black" radius="0.05" height="0.2"></a-cylinder>
                    <a-cylinder position="0 0.25 -0.41" rotation="0 0 90" color="black" radius="0.05" height="0.2"></a-cylinder>
                    <a-cylinder position="0 0.29 -0.40" rotation="0 0 90" color="black" radius="0.05" height="0.2"></a-cylinder>
                    <a-cylinder position="0 0.32 -0.39" rotation="0 0 90" color="black" radius="0.05" height="0.2"></a-cylinder>
                    <a-cylinder position="0 0.33 -0.38" rotation="0 0 90" color="black" radius="0.05" height="0.2"></a-cylinder>
                </a-entity>

                <a-entity position="0 0.70 -0.36">
                    <a-box rotation="80 0 0" color="black" height="0.1" depth="0.5" width="0.6">
                        <a-cylinder position="0 0 -0.25" rotation="0 0 90" color="black" radius="0.05" height="0.6"></a-cylinder>
                        <a-cylinder position="0 0 0.25" rotation="0 0 90" color="black" radius="0.05" height="0.6"></a-cylinder>
                    </a-box>
                </a-entity>

                <a-entity position="0 0.27 0">
                    <a-box rotation="2 0 0" color="black" height="0.1" depth="0.6" width="0.6">
                        <a-cylinder position="0 0 -0.3" rotation="0 0 90" color="black" radius="0.05" height="0.6"></a-cylinder>
                        <a-cylinder position="0 0 0.3" rotation="0 0 90" color="black" radius="0.05" height="0.6"></a-cylinder>
                    </a-box>
                </a-entity>

                <a-cylinder position="0 0.15 0" color="gray" radius="0.04" height="0.3"></a-cylinder>

                <a-entity rotation="20 0 0">
                    <a-box color="black" width="0.06" height="0.06" depth="0.4" position="0 0 0.2"></a-box>
                    <a-box rotation="-20 0 0" color="black" width="0.06" height="0.1" depth="0.06" position="0 -0.03 0.4">
                        <a-sphere radius="0.05" color="gray" position="0 -0.05 0"></a-sphere>
                    </a-box>
                </a-entity>
                <a-entity rotation="20 72 0">
                    <a-box color="black" width="0.06" height="0.06" depth="0.4" position="0 0 0.2"></a-box>
                    <a-box rotation="-20 0 0" color="black" width="0.06" height="0.1" depth="0.06" position="0 -0.03 0.4">
                        <a-sphere radius="0.05" color="gray" position="0 -0.05 0"></a-sphere>
                    </a-box>
                </a-entity>
                <a-entity rotation="20 144 0">
                    <a-box color="black" width="0.06" height="0.06" depth="0.4" position="0 0 0.2"></a-box>
                    <a-box rotation="-20 0 0" color="black" width="0.06" height="0.1" depth="0.06" position="0 -0.03 0.4">
                        <a-sphere radius="0.05" color="gray" position="0 -0.05 0"></a-sphere>
                    </a-box>
                </a-entity>
                <a-entity rotation="20 216 0">
                    <a-box color="black" width="0.06" height="0.06" depth="0.4" position="0 0 0.2"></a-box>
                    <a-box rotation="-20 0 0" color="black" width="0.06" height="0.1" depth="0.06" position="0 -0.03 0.4">
                        <a-sphere radius="0.05" color="gray" position="0 -0.05 0"></a-sphere>
                    </a-box>
                </a-entity>
                <a-entity rotation="20 288 0">
                    <a-box color="black" width="0.06" height="0.06" depth="0.4" position="0 0 0.2"></a-box>
                    <a-box rotation="-20 0 0" color="black" width="0.06" height="0.1" depth="0.06" position="0 -0.03 0.4">
                        <a-sphere radius="0.05" color="gray" position="0 -0.05 0"></a-sphere>
                    </a-box>
                </a-entity>
            </a-entity>
        </a-entity>
    );
};

export default ComputerChair;