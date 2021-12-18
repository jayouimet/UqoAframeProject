import React from 'react';
import Wall from './Wall';

window.AFRAME.registerComponent('door-component', {
    schema: { duration: { default: 2 } },
    init: function () {
        this.isDoorOpened = false;
        this.done = true;
        this.el.addEventListener('click', this.OnDoorClick.bind(this));
    },
    OnDoorClick: function (event) {
        if (!this.done) return;
        console.log(this);
        this.done = false;
        let obj = this;
        this.el.setAttribute("animation", `property:rotation;from:0 ${90 * (this.isDoorOpened) * -1} 0;to:0 ${90 * (!this.isDoorOpened) * -1} 0;dur:${this.nextData.duration * 1000};easing:linear;`);

        setTimeout(function () {
            obj.done = true;
        }, this.nextData.duration * 1000);

        this.isDoorOpened = !this.isDoorOpened;
    }
});

const Door = ({ wallWidth, wallHeight, doorWidth, doorHeight, position, rotation, depth }) => {
    return (
        <a-entity position={position} rotation={rotation}>
            <Wall depth={depth} width={(wallWidth - doorWidth) / 2} height={wallHeight} position={`${(wallWidth + doorWidth) / 4} 0 0`} />
            <Wall depth={depth} width={doorWidth} height={wallHeight - doorHeight} position={`0 ${doorHeight / 2} 0`} />
            <Wall depth={depth} width={(wallWidth - doorWidth) / 2} height={wallHeight} position={`-${(wallWidth + doorWidth) / 4} 0 0`} />
            <a-entity position={`-${doorWidth/2} ${(doorHeight - wallHeight) / 2} 0`}>
                <a-entity door-component>
                    <a-plane src="#door" height={doorHeight} width={doorWidth} position={`${doorWidth/2} 0 ${depth/2}`}></a-plane>
                    <a-plane src="#door1" height={doorHeight} width={doorWidth} position={`${doorWidth/2} 0 -${depth/2}`} rotation="0 180 0"></a-plane>
                    <a-plane color="black" width={depth} height={doorHeight} rotation="0 90 0" position={`${doorWidth} 0 0`}></a-plane>
                    <a-plane color="black" width={depth} height={doorHeight} rotation="0 -90 0" position={`0 0 0`}></a-plane>
                </a-entity>
            </a-entity>
            {/* Door */}
        </a-entity>
    );
};

export default Door;