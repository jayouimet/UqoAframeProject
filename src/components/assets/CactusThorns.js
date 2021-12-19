import React from 'react';

const CactusThorns = (props) => {
    return (
        <a-entity {...props}>
            <a-cone color="black" radius-bottom="0.005" radius-top="0" height="0.02" rotation="90 0 0"></a-cone>
        </a-entity>
    );
};

export default CactusThorns;