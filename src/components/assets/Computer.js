import React from 'react';

const Computer = (props) => {
    return (
        <a-entity {...props}>
            <a-box color="#090909" height="0.6" width="0.3" depth="0.6" position="0 0.3 0"></a-box>
            <a-box color="red" height="0.02" width="0.02" depth="0.01" position="-0.05 0.55 0.3"></a-box>
            <a-box color="green" height="0.02" width="0.02" depth="0.01" position="0.05 0.55 0.3"></a-box>
            <a-box color="blue" height="0.02" width="0.14" depth="0.01" position="0 0.25 0.3"></a-box>
        </a-entity>
    );
};

export default Computer;