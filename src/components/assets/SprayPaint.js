import React from 'react';

const SprayPaint = ({color, ...props}) => {
    return (
        <a-entity {...props}>
            <a-cylinder color="#AAAAAA" radius="0.08" position="0 0.175 0" height="0.35"></a-cylinder>
            <a-cylinder color={color ? color : "yellow"} radius="0.08" position="0 0.425 0" height="0.15"></a-cylinder>
        </a-entity>
    );
};

export default SprayPaint;