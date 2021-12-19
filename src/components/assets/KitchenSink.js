import React from 'react';

if (!window.AFRAME.components["kitchen-sink-component"]) {
    window.AFRAME.registerComponent('kitchen-sink-component', {
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

const KitchenSink = ({color, ...props}) => {
    return (
        <a-entity {...props}>
            <a-box position="-0.5 0.45 0" src="#counterWood" width="0.05" height="0.9" depth="0.8"></a-box>
            <a-box position="0.5 0.45 0" src="#counterWood" width="0.05" height="0.9" depth="0.8"></a-box>
            <a-box position="0 0.025 0" src="#counterWood" width="1" height="0.05" depth="0.8"></a-box>
            <a-box position="0 0.45 0" src="#counterWood" width="1" height="0.05" depth="0.8"></a-box>
            <a-box position="0 0.45 -0.375" src="#counterWood" width="1" height="0.9" depth="0.05"></a-box>

            <a-entity position="0 0.955 0.025">
                <a-box position="0.35 0 0" color="#808080" width="0.05" height="0.01" depth="0.6"></a-box>
                <a-box position="-0.35 0 0" color="#808080" width="0.05" height="0.01" depth="0.6"></a-box>
                <a-box position="0 0 -0.325" color="#808080" width="0.75" height="0.01" depth="0.1"></a-box>
                <a-box position="0 0 0.3" color="#808080" width="0.75" height="0.01" depth="0.05"></a-box>

                <a-box position="0.325 -0.145 0" color="#808080" width="0.01" height="0.3" depth="0.55"></a-box>
                <a-box position="-0.325 -0.145 0" color="#808080" width="0.01" height="0.3" depth="0.55"></a-box>
                <a-box position="0 -0.145 -0.275" color="#808080" width="0.66" height="0.3" depth="0.01"></a-box>
                <a-box position="0 -0.145 0.275" color="#808080" width="0.66" height="0.3" depth="0.01"></a-box>

                <a-box position="0 -0.29 0" color="#808080" width="0.66" height="0.01" depth="0.55"></a-box>

                <a-box position="0 0.005 -0.325" color="#808080" width="0.35" height="0.01" depth="0.08"></a-box>

                <a-box position="0 0.1 -0.325" color="#505050" width="0.04" height="0.2" depth="0.04"></a-box>
                <a-box position="0 0.15 -0.225" color="#505050" width="0.04" height="0.02" depth="0.2"></a-box>

                <a-box position="0 0.19 -0.325" color="#505050" width="0.05" height="0.04" depth="0.05"></a-box>
                <a-box position="0 0.19 -0.275" color="#505050" width="0.04" height="0.01" depth="0.1"></a-box>
            </a-entity>

            <a-box position="-0.425 0.875 0.025" src="#counterWood" width="0.15" height="0.05" depth="0.7"></a-box>
            <a-box position="0.425 0.875 0.025" src="#counterWood" width="0.15" height="0.05" depth="0.7"></a-box>
            <a-box position="0 0.875 0.3375" src="#counterWood" width="1" height="0.05" depth="0.075"></a-box>
            <a-box position="0 0.875 -0.3125" src="#counterWood" width="1" height="0.05" depth="0.125"></a-box>

            <a-entity rotation="0 0 0" position="0.45 0.45 0.4" kitchen-sink-component>
                <a-box position="-0.45 0 0" src="#counterWood" width="1" height="0.85" depth="0.05"></a-box>
                <a-sphere position="-0.85 0 0.05" color="#EEEEEE" radius="0.02"></a-sphere>
            </a-entity>

            <a-box position="-0.45 0.925 0.025" color={color ? color : "#EEEEEE"} width="0.2" height="0.05" depth="0.85"></a-box>
            <a-box position="0.45 0.925 0.025" color={color ? color : "#EEEEEE"} width="0.2" height="0.05" depth="0.85"></a-box>
            <a-box position="0 0.925 0.375" color={color ? color : "#EEEEEE"} width="1.1" height="0.05" depth="0.15"></a-box>
            <a-box position="0 0.925 -0.325" color={color ? color : "#EEEEEE"} width="1.1" height="0.05" depth="0.15"></a-box>
        </a-entity>
    );
};

export default KitchenSink;