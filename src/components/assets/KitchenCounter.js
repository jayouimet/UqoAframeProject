import React from 'react';

if (!window.AFRAME.components["counter-component"]) {
    window.AFRAME.registerComponent('counter-component', {
        schema: { duration: { default: 2 } },
        init: function () {
            this.isDoorOpened = false;
            this.done = true;
            this.el.addEventListener('click', this.OnDoorClick.bind(this));
        },
        OnDoorClick: function (event) {
            if (!this.done) return;
            
            this.done = false;
            let obj = this;
            this.el.setAttribute("animation", `property:rotation;from:0 ${90 * (this.isDoorOpened)} 0;to:0 ${90 * (!this.isDoorOpened)} 0;dur:${this.nextData.duration * 1000};easing:linear;`);

            setTimeout(function () {
                obj.done = true;
            }, this.nextData.duration * 1000);

            this.isDoorOpened = !this.isDoorOpened;
        }
    });
}

const KitchenCounter = ({color, top, ...props}) => {
    return (
        <a-entity {...props}>
            <a-box position="-0.5 0.45 0" src="#counterWood" width="0.05" height="0.9" depth="0.8"></a-box>
            <a-box position="0.5 0.45 0" src="#counterWood" width="0.05" height="0.9" depth="0.8"></a-box>
            <a-box position="0 0.025 0" src="#counterWood" width="1" height="0.05" depth="0.795"></a-box>
            <a-box position="0 0.45 0" src="#counterWood" width="1" height="0.05" depth="0.795"></a-box>
            <a-box position="0 0.875 0" src="#counterWood" width="1" height="0.05" depth="0.795"></a-box>
            <a-box position="0 0.45 -0.375" src="#counterWood" width="1" height="0.9" depth="0.05"></a-box>

            <a-entity rotation="0 0 0" position="0.45 0.45 0.4" counter-component>
                <a-box position="-0.45 0 0" src="#counterWood" width="1" height="0.85" depth="0.05"></a-box>
                <a-sphere position="-0.85 0 0.05" color="#EEEEEE" radius="0.02"></a-sphere>
            </a-entity>

            {top ? null : <a-box position="0 0.925 0.025" color={color ? color : "#EEEEEE"} width="1.1" height="0.05" depth="0.85"></a-box>}
        </a-entity>
    );
};

export default KitchenCounter;