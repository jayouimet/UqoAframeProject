import React from 'react';

const KeyBoard = (props) => {
    return (
        <a-entity {...props}>
            <a-box color="#1A1A1A" width="0.7" height="0.05" depth="0.25"></a-box>
            <a-box position="-0.07 0.02 0.02" color="#101010" width="0.5" height="0.05" depth="0.16"></a-box>
            <a-box position="-0.305 0.02 -0.09" color="#101010" width="0.03" height="0.05" depth="0.03"></a-box>
            <a-box position="-0.19 0.02 -0.09" color="#101010" width="0.12" height="0.05" depth="0.03"></a-box>
            <a-box position="-0.03 0.02 -0.09" color="#101010" width="0.12" height="0.05" depth="0.03"></a-box>
            <a-box position="0.12 0.02 -0.09" color="#101010" width="0.12" height="0.05" depth="0.03"></a-box>
            <a-box position="0.26 0.02 -0.09" color="#101010" width="0.12" height="0.05" depth="0.03"></a-box>
            <a-box position="0.26 0.02 -0.02" color="#101010" width="0.12" height="0.05" depth="0.08"></a-box>
            <a-box position="0.26 0.02 0.085" color="#101010" width="0.12" height="0.05" depth="0.03"></a-box>
            <a-box position="0.26 0.02 0.065" color="#101010" width="0.03" height="0.05" depth="0.07"></a-box>
        </a-entity>
    );
};

export default KeyBoard;