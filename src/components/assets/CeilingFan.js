import React from 'react';

if (!window.AFRAME.components["fan-component"]) {
    window.AFRAME.registerComponent('fan-component', {
        schema: { duration: { default: 0.5 } },
        init: function () {
            this.isFanOn = true;
            this.element = this.el.querySelector(".beyblade");
            this.el.addEventListener('click', this.OnFanClick.bind(this));
        },
        OnFanClick: function (event) {
            this.isFanOn = !this.isFanOn;
            if (this.isFanOn)
                this.element.emit(":)");
            else
                this.element.emit(":(");
        }
    });
}

const CeilingFan = (props) => {
    return (
        <a-entity {...props}>
            <a-entity fan-component>
                <a-cylinder color="#AAAAAA" height="0.1" radius="0.2"></a-cylinder>
                <a-cone position="0 -0.075 0" height="0.05" radius-bottom="0.15" radius-top="0.2" color="#AAAAAA"></a-cone>
                <a-cylinder position="0 -0.1 0" color="#AAAAAA" height="0.1" radius="0.05"></a-cylinder>
                <a-entity position="0 -0.1625 0">
                    <a-cone height="0.025" radius-bottom="0.25" radius-top="0.15" color="#AAAAAA"></a-cone>
                    <a-cylinder position="0 -0.025 0" color="#AAAAAA" height="0.025" radius="0.25"></a-cylinder>
                    <a-cone position="0 -0.05 0" height="0.025" radius-bottom="0.23" radius-top="0.25" color="#AAAAAA"></a-cone>
                    <a-cone position="0 -0.075 0" height="0.025" radius-bottom="0.19" radius-top="0.23" color="#AAAAAA"></a-cone>
                    <a-cone position="0 -0.1 0" height="0.025" radius-bottom="0.12" radius-top="0.19" color="#AAAAAA"></a-cone>

                    <a-entity class="beyblade" animation="autoplay:true;property:rotation;loop:true;dur:1000;to: 0 360 0;easing:linear;pauseEvents: :(;resumeEvents: :);">
                        <a-entity rotation="0 0 0">
                            <a-entity position="0 0 0.3">
                                <a-box height="0.01" width="0.025" depth="0.3"></a-box>
                                <a-box src="#counterWood" rotation="0 0 8" position="0 0 0.425" height="0.015" width="0.2" depth="0.75"></a-box>
                            </a-entity>
                        </a-entity>
                        <a-entity rotation="0 72 0">
                            <a-entity position="0 0 0.3">
                                <a-box height="0.01" width="0.025" depth="0.3"></a-box>
                                <a-box src="#counterWood" rotation="0 0 8" position="0 0 0.425" height="0.015" width="0.2" depth="0.75"></a-box>
                            </a-entity>
                        </a-entity>
                        <a-entity rotation="0 144 0">
                            <a-entity position="0 0 0.3">
                                <a-box height="0.01" width="0.025" depth="0.3"></a-box>
                                <a-box src="#counterWood" rotation="0 0 8" position="0 0 0.425" height="0.015" width="0.2" depth="0.75"></a-box>
                            </a-entity>
                        </a-entity>
                        <a-entity rotation="0 216 0">
                            <a-entity position="0 0 0.3">
                                <a-box height="0.01" width="0.025" depth="0.3"></a-box>
                                <a-box src="#counterWood" rotation="0 0 8" position="0 0 0.425" height="0.015" width="0.2" depth="0.75"></a-box>
                            </a-entity>
                        </a-entity>
                        <a-entity rotation="0 288 0">
                            <a-entity position="0 0 0.3">
                                <a-box height="0.01" width="0.025" depth="0.3"></a-box>
                                <a-box src="#counterWood" rotation="0 0 8" position="0 0 0.425" height="0.015" width="0.2" depth="0.75"></a-box>
                            </a-entity>
                        </a-entity>
                    </a-entity>
                </a-entity>
            </a-entity>
        </a-entity>
    );
};

export default CeilingFan;