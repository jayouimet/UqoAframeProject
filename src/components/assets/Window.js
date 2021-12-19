import React from 'react';
import Wall from './Wall';

window.AFRAME.registerComponent('curtain-component', {
    schema: { duration: { default: 2 } },
    init: function () {
        this.isCurtainOpened = true;
        this.done = true;
        this.height = this.el.getAttribute("height");
        this.el.addEventListener('click', this.OnCurtainClick.bind(this));
        this.el.setAttribute("animation", `property:height;from:${(this.isCurtainOpened ? this.height : 0.5)};to:${(!this.isCurtainOpened ? this.height : 0.5)};dur:1;easing:linear;`);
        this.el.setAttribute("animation__2", `property:position;from:0 ${(!this.isCurtainOpened ? this.height/2 - 0.25 : 0)} 0;to:0 ${(this.isCurtainOpened ? this.height/2 - 0.25 : 0)} 0;dur:1;easing:linear;`);
        this.isCurtainOpened = false;
    },
    OnCurtainClick: function (event) {
        if (!this.done) return;
        
        this.done = false;
        let obj = this;
        this.el.setAttribute("animation", `property:height;from:${(this.isCurtainOpened ? this.height : 0.5)};to:${(!this.isCurtainOpened ? this.height : 0.5)};dur:${this.nextData.duration * 1000};easing:linear;`);
        this.el.setAttribute("animation__2", `property:position;from:0 ${(!this.isCurtainOpened ? this.height/2 - 0.25 : 0)} 0;to:0 ${(this.isCurtainOpened ? this.height/2 - 0.25 : 0)} 0;dur:${this.nextData.duration * 1000};easing:linear;`);

        setTimeout(function () {
            obj.done = true;
        }, this.nextData.duration * 1000);

        this.isCurtainOpened = !this.isCurtainOpened;
    }
});

const Window = ({ wallWidth, wallHeight, windowWidth, windowHeight, position, rotation, depth}) => {
    return (
        <a-entity position={position} rotation={rotation}>
            <Wall depth={depth} width={(wallWidth - windowWidth) / 2} height={wallHeight} position={`${(wallWidth + windowWidth) / 4} 0 0`} />
            <Wall depth={depth} width={windowWidth} height={(wallHeight - windowHeight) / 2} position={`0 ${(wallHeight + windowHeight) / 4} 0`} />
            <Wall depth={depth} width={windowWidth} height={(wallHeight - windowHeight) / 2} position={`0 -${(wallHeight + windowHeight) / 4} 0`} />
            <Wall depth={depth} width={(wallWidth - windowWidth) / 2} height={wallHeight} position={`-${(wallWidth + windowWidth) / 4} 0 0`} />
            
            <a-entity position={`0 0 0`}>
                <a-box opacity="0.4" color="black" depth={depth} width={windowWidth} height={windowHeight}></a-box>
                <a-entity position={`0 0 -${depth/2 + 0.03}`} height={windowHeight+0.5} width={windowWidth}>
                    <a-plane curtain-component color="darkslategray" position="0 0 0" side="double" height={windowHeight+0.5} width={windowWidth}></a-plane>
                </a-entity>
            </a-entity>
            {/* Door */}
        </a-entity>
    );
};

export default Window;