(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{DhpZ:function(r,e){const a=[{name:"Dial",description:"A dial for turning it up to 11.",examples:[{id:"dial",name:"Standard",markup:'<div class="spectrum-Dial">\n  <div class="spectrum-Dial-controls">\n    <div class="spectrum-Dial-handle" tabindex="0">\n      <input type="range" class="spectrum-Dial-input" min="0" max="100" value="0">\n    </div>\n  </div>\n</div>\n<div class="spectrum-Dial is-disabled">\n  <div class="spectrum-Dial-controls">\n    <div class="spectrum-Dial-handle" tabindex="0">\n      <input type="range" class="spectrum-Dial-input" min="0" max="100" value="0">\n    </div>\n  </div>\n</div>\n\n<br><br>\n\n<div class="spectrum-Dial spectrum-Dial--small">\n  <div class="spectrum-Dial-controls">\n    <div class="spectrum-Dial-handle" tabindex="0">\n      <input type="range" class="spectrum-Dial-input" min="0" max="100" value="0">\n    </div>\n  </div>\n</div>\n<div class="spectrum-Dial spectrum-Dial--small is-disabled">\n  <div class="spectrum-Dial-controls">\n    <div class="spectrum-Dial-handle" tabindex="0">\n      <input type="range" class="spectrum-Dial-input" min="0" max="100" value="0">\n    </div>\n  </div>\n</div>\n'},{id:"dial",name:"With label",markup:'<div class="spectrum-Dial">\n  <div class="spectrum-Dial-labelContainer">\n    <label id="dialLabel" class="spectrum-Dial-label" for="labeledDial">Label</label>\n    \x3c!--<div class="spectrum-Dial-value" role="textbox" aria-readonly="true" aria-labelledby="dialLabel">54</div>--\x3e\n  </div>\n  <div class="spectrum-Dial-controls">\n    <div class="spectrum-Dial-handle" tabindex="0">\n      <input type="range" class="spectrum-Dial-input" id="labeledDial" min="0" max="100" value="0">\n    </div>\n  </div>\n</div>\n<div class="spectrum-Dial is-disabled">\n  <div class="spectrum-Dial-labelContainer">\n    <label id="dialLabel" class="spectrum-Dial-label" for="labeledDial">Label</label>\n    \x3c!--<div class="spectrum-Dial-value" role="textbox" aria-readonly="true" aria-labelledby="dialLabel">54</div>--\x3e\n  </div>\n  <div class="spectrum-Dial-controls">\n    <div class="spectrum-Dial-handle" tabindex="0">\n      <input type="range" class="spectrum-Dial-input" id="labeledDial" min="0" max="100" value="0">\n    </div>\n  </div>\n</div>\n\n<br><br>\n\n<div class="spectrum-Dial">\n  <div class="spectrum-Dial-labelContainer">\n    <label id="dialLabel" class="spectrum-Dial-label" for="labeledDial">Label</label>\n    <div class="spectrum-Dial-value" role="textbox" aria-readonly="true" aria-labelledby="dialLabel">54</div>\n  </div>\n  <div class="spectrum-Dial-controls">\n    <div class="spectrum-Dial-handle" tabindex="0">\n      <input type="range" class="spectrum-Dial-input" id="labeledDial" min="0" max="100" value="0">\n    </div>\n  </div>\n</div>\n\n<div class="spectrum-Dial is-disabled">\n  <div class="spectrum-Dial-labelContainer">\n    <label id="dialLabel" class="spectrum-Dial-label" for="labeledDial">Label</label>\n    <div class="spectrum-Dial-value" role="textbox" aria-readonly="true" aria-labelledby="dialLabel">54</div>\n  </div>\n  <div class="spectrum-Dial-controls">\n    <div class="spectrum-Dial-handle" tabindex="0">\n      <input type="range" class="spectrum-Dial-input" id="labeledDial" min="0" max="100" value="0">\n    </div>\n  </div>\n</div>\n'}],packageSlug:"slider",indexCSS:".spectrum-Slider,\n.spectrum-Dial {\n  position: relative;\n  z-index: 1;\n  display: block;\n  min-height: var(--spectrum-slider-height, var(--spectrum-alias-single-line-height));\n  min-width: var(--spectrum-slider-min-width, var(--spectrum-global-dimension-size-1250));\n\n  -webkit-user-select: none;\n\n     -moz-user-select: none;\n\n      -ms-user-select: none;\n\n          user-select: none;\n}\n\n.spectrum-Slider-controls,\n.spectrum-Dial-controls {\n  display: inline-block;\n  box-sizing: border-box;\n\n  position: relative;\n  z-index: auto;\n  width: calc(100% - var(--spectrum-slider-handle-width, var(--spectrum-global-dimension-size-200)) / 2 * 2);\n  margin-left: calc(var(--spectrum-slider-handle-width, var(--spectrum-global-dimension-size-200)) / 2);\n  min-height: var(--spectrum-slider-height, var(--spectrum-alias-single-line-height));\n\n  vertical-align: top;\n}\n\n.spectrum-Slider-track,\n.spectrum-Slider-buffer,\n.spectrum-Slider-ramp,\n.spectrum-Slider-fill {\n  height: var(--spectrum-slider-track-height, var(--spectrum-alias-border-size-thick));\n  box-sizing: border-box;\n\n  position: absolute;\n  z-index: 1;\n  top: calc(var(--spectrum-slider-height, var(--spectrum-alias-single-line-height)) / 2);\n  left: 0;\n  right: auto;\n\n  margin-top: calc(var(--spectrum-slider-fill-track-height, var(--spectrum-alias-border-size-thick)) / -2);\n\n  pointer-events: none;\n}\n\n.spectrum-Slider-track,\n.spectrum-Slider-buffer,\n.spectrum-Slider-fill {\n  padding: 0 var(--spectrum-slider-handle-gap, var(--spectrum-alias-border-size-thicker)) 0 0;\n  margin-left: calc(var(--spectrum-slider-handle-width, var(--spectrum-global-dimension-size-200)) / 2 * -1);\n}\n\n.spectrum-Slider-track::before, .spectrum-Slider-buffer::before, .spectrum-Slider-fill::before {\n    content: '';\n    display: block;\n    height: 100%;\n\n    border-radius: var(--spectrum-slider-track-border-radius, var(--spectrum-global-dimension-static-size-10));\n  }\n\n.spectrum-Slider-fill {\n  margin-left: 0;\n  padding: 0 0 0 calc(var(--spectrum-slider-handle-width, var(--spectrum-global-dimension-size-200)) / 2 + var(--spectrum-slider-handle-gap, var(--spectrum-alias-border-size-thicker)));\n}\n\n.spectrum-Slider-fill--right {\n  padding: 0 calc(var(--spectrum-slider-handle-width, var(--spectrum-global-dimension-size-200)) / 2 + var(--spectrum-slider-handle-gap, var(--spectrum-alias-border-size-thicker))) 0 0;\n}\n\n.spectrum-Slider-buffer {\n  padding: 0 var(--spectrum-slider-handle-gap, var(--spectrum-alias-border-size-thicker)) 0 0;\n}\n\n.spectrum-Slider-track ~ .spectrum-Slider-track,\n.spectrum-Slider-buffer ~ .spectrum-Slider-buffer {\n  left: auto;\n  right: 0;\n  padding: 0 0 0 var(--spectrum-slider-handle-gap, var(--spectrum-alias-border-size-thicker));\n  margin-left: 0;\n  margin-right: calc(var(--spectrum-slider-handle-width, var(--spectrum-global-dimension-size-200)) / 2 * -1);\n}\n\n.spectrum-Slider-buffer ~ .spectrum-Slider-buffer {\n  margin-right: 0;\n  padding: 0 0 0 calc(var(--spectrum-slider-handle-gap, var(--spectrum-alias-border-size-thicker)) + var(--spectrum-slider-handle-width, var(--spectrum-global-dimension-size-200)) / 2);\n}\n\n.spectrum-Slider-buffer ~ .spectrum-Slider-buffer:after {\n    display: none;\n  }\n\n.spectrum-Slider--range .spectrum-Slider-value {\n    -webkit-user-select: text;\n       -moz-user-select: text;\n        -ms-user-select: text;\n            user-select: text;\n  }\n\n.spectrum-Slider--range .spectrum-Slider-track:first-of-type {\n      padding: 0 var(--spectrum-slider-handle-gap, var(--spectrum-alias-border-size-thicker)) 0 0;\n      left: 0;\n      right: auto;\n      margin-left: calc(var(--spectrum-slider-handle-width, var(--spectrum-global-dimension-size-200)) / 2 * -1);\n    }\n\n.spectrum-Slider--range .spectrum-Slider-track {\n      padding: 0 calc(var(--spectrum-slider-handle-gap, var(--spectrum-alias-border-size-thicker)) + var(--spectrum-slider-handle-width, var(--spectrum-global-dimension-size-200)) / 2) 0 calc(var(--spectrum-slider-handle-gap, var(--spectrum-alias-border-size-thicker)) + var(--spectrum-slider-handle-width, var(--spectrum-global-dimension-size-200)) / 2);\n      left: auto;\n      right: auto;\n      margin: 0;\n    }\n\n.spectrum-Slider--range .spectrum-Slider-track:last-of-type {\n      padding: 0 0 0 var(--spectrum-slider-handle-gap, var(--spectrum-alias-border-size-thicker));\n      left: auto;\n      right: 0;\n      margin-right: calc(var(--spectrum-slider-handle-width, var(--spectrum-global-dimension-size-200)) / 2 * -1);\n    }\n\n.spectrum-Slider-buffer {\n  z-index: 2;\n}\n\n.spectrum-Slider-ramp {\n  margin-top: 0;\n  height: var(--spectrum-slider-ramp-track-height, var(--spectrum-global-dimension-static-size-200));\n\n  position: absolute;\n  left: calc(var(--spectrum-slider-handle-width, var(--spectrum-global-dimension-size-200)) / 2 * -1);\n  right: calc(var(--spectrum-slider-handle-width, var(--spectrum-global-dimension-size-200)) / 2 * -1);\n  top: calc(var(--spectrum-slider-ramp-track-height, var(--spectrum-global-dimension-static-size-200)) / 2);\n}\n\n.spectrum-Slider-ramp svg {\n    width: 100%;\n    height: 100%;\n  }\n\n.spectrum-Slider-handle,\n.spectrum-Dial-handle {\n  position: absolute;\n  left: 0;\n  top: calc(var(--spectrum-slider-height, var(--spectrum-alias-single-line-height)) / 2);\n  z-index: 2;\n\n  display: inline-block;\n  box-sizing: border-box;\n\n  width: var(--spectrum-slider-handle-width, var(--spectrum-global-dimension-size-200));\n  height: var(--spectrum-slider-handle-height, var(--spectrum-global-dimension-size-200));\n\n  margin: calc(var(--spectrum-slider-handle-width, var(--spectrum-global-dimension-size-200)) / -2) 0 0 calc(var(--spectrum-slider-handle-width, var(--spectrum-global-dimension-size-200)) / -2);\n\n  border-width: var(--spectrum-slider-handle-border-size, var(--spectrum-alias-border-size-thick));\n  border-style: solid;\n\n  border-radius: var(--spectrum-slider-handle-border-radius, var(--spectrum-alias-border-radius-medium));\n\n  transition: border-width var(--spectrum-slider-animation-duration, var(--spectrum-global-animation-duration-100)) ease-in-out;\n\n  outline: none;\n  cursor: pointer;\n  cursor: grab;\n}\n\n.spectrum-Slider-handle:active,\n.spectrum-Slider-handle.is-focused,\n.spectrum-Slider-handle.is-dragged,\n.spectrum-Dial-handle:active {\n    border-width: var(--spectrum-slider-handle-border-size-down, var(--spectrum-global-dimension-size-75));\n    cursor: ns-resize;\n    cursor: grabbing;\n  }\n\n.spectrum-Slider-handle:active,\n.spectrum-Slider-handle.is-focused,\n.spectrum-Slider-handle.is-dragged,\n.spectrum-Slider-handle.is-tophandle,\n.spectrum-Dial-handle:active {\n    z-index: 3;\n  }\n\n.spectrum-Slider-input,\n.spectrum-Dial-input {\n  margin: 0;\n\n  width: var(--spectrum-slider-handle-width, var(--spectrum-global-dimension-size-200));\n  height: var(--spectrum-slider-handle-height, var(--spectrum-global-dimension-size-200));\n  padding: 0;\n  position: absolute;\n  top: calc(var(--spectrum-slider-handle-width, var(--spectrum-global-dimension-size-200)) / -2 / 4);\n  left: calc(var(--spectrum-slider-handle-width, var(--spectrum-global-dimension-size-200)) / -2 / 4);\n  overflow: hidden;\n  opacity: .000001;\n  cursor: default;\n  -webkit-appearance: none;\n  border: 0;\n  pointer-events: none;\n}\n\n.spectrum-Slider-input:focus,\n.spectrum-Dial-input:focus {\n    outline: none;\n  }\n\n.spectrum-Slider-labelContainer,\n.spectrum-Dial-labelContainer {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n\n  width: auto;\n\n  padding-top: var(--spectrum-fieldlabel-padding-top, var(--spectrum-global-dimension-size-50));\n\n  font-size: var(--spectrum-label-text-size, var(--spectrum-global-dimension-font-size-75));\n  line-height: var(--spectrum-label-text-line-height, var(--spectrum-global-font-line-height-small));\n}\n\n.spectrum-Slider-label,\n.spectrum-Dial-label {\n  padding-left: 0;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n\n.spectrum-Slider-value,\n.spectrum-Dial-value {\n  -ms-flex-positive: 0;\n      flex-grow: 0;\n  padding-right: 0;\n  cursor: default;\n}\n\n.spectrum-Slider-value {\n  margin-left: var(--spectrum-slider-label-gap-x, var(--spectrum-global-dimension-size-200));\n}\n\n.spectrum-Slider-ticks {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n\n  z-index: 0;\n\n  margin: 0 calc(var(--spectrum-slider-handle-width, var(--spectrum-global-dimension-size-200)) / 2 * -1);\n  margin-top: calc(var(--spectrum-slider-tick-mark-height, 10px) + var(--spectrum-slider-track-height, var(--spectrum-alias-border-size-thick)) / 2);\n}\n\n.spectrum-Slider-tick {\n  position: relative;\n\n  width: var(--spectrum-slider-tick-mark-width, var(--spectrum-alias-border-size-thick));\n}\n\n.spectrum-Slider-tick:after {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: calc(50% - var(--spectrum-slider-tick-mark-width, var(--spectrum-alias-border-size-thick)) / 2);\n    content: '';\n    width: var(--spectrum-slider-tick-mark-width, var(--spectrum-alias-border-size-thick));\n    height: var(--spectrum-slider-tick-mark-height, 10px);\n\n    border-radius: var(--spectrum-slider-tick-mark-border-radius, var(--spectrum-alias-border-radius-xsmall));\n  }\n\n.spectrum-Slider-tick .spectrum-Slider-tickLabel {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n\n    margin: var(--spectrum-slider-label-gap-x, var(--spectrum-global-dimension-size-200)) calc(var(--spectrum-slider-label-gap-x, var(--spectrum-global-dimension-size-200)) * -1) 0 calc(var(--spectrum-slider-label-gap-x, var(--spectrum-global-dimension-size-200)) * -1);\n\n    font-size: var(--spectrum-label-text-size, var(--spectrum-global-dimension-font-size-75));\n    line-height: var(--spectrum-label-text-line-height, var(--spectrum-global-font-line-height-small));\n  }\n\n.spectrum-Slider-tick:first-of-type .spectrum-Slider-tickLabel, .spectrum-Slider-tick:last-of-type .spectrum-Slider-tickLabel {\n      display: block;\n      position: absolute;\n      margin: var(--spectrum-slider-label-gap-x, var(--spectrum-global-dimension-size-200)) 0 0 0;\n    }\n\n.spectrum-Slider-tick:first-of-type .spectrum-Slider-tickLabel {\n      left: 0;\n    }\n\n.spectrum-Slider-tick:last-of-type .spectrum-Slider-tickLabel {\n      right: 0;\n    }\n\n.spectrum-Slider--color .spectrum-Slider-labelContainer,\n.spectrum-Slider--color .spectrum-Dial-labelContainer {\n    padding-bottom: var(--spectrum-fieldlabel-padding-bottom, var(--spectrum-global-dimension-size-65));\n  }\n\n.spectrum-Slider--color .spectrum-Slider-controls,\n.spectrum-Slider--color .spectrum-Slider-controls::before,\n.spectrum-Slider--color .spectrum-Slider-track,\n.spectrum-Slider--color .spectrum-Dial-controls,\n.spectrum-Slider--color .spectrum-Dial-controls::before {\n    min-height: auto;\n    height: var(--spectrum-slider-color-track-height, var(--spectrum-global-dimension-static-size-300));\n    margin-left: 0;\n    width: 100%;\n  }\n\n.spectrum-Slider--color .spectrum-Slider-controls::before,\n.spectrum-Slider--color .spectrum-Dial-controls::before {\n    display: block;\n    content: '';\n  }\n\n.spectrum-Slider--color .spectrum-Slider-controls::before,\n.spectrum-Slider--color .spectrum-Slider-track,\n.spectrum-Slider--color .spectrum-Dial-controls::before {\n    top: 0;\n    padding: 0;\n    margin-top: 0;\n    margin-right: 0;\n    border-radius: var(--spectrum-alias-border-radius-regular, var(--spectrum-global-dimension-size-50));\n  }\n\n.spectrum-Slider--color .spectrum-Slider-handle,\n.spectrum-Slider--color .spectrum-Dial-handle {\n    top: 50%;\n  }\n\n.spectrum-Dial {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n\n  height: auto;\n  min-width: 0;\n  min-height: 0;\n  width: var(--spectrum-dial-container-width, var(--spectrum-global-dimension-static-size-600));\n}\n\n.spectrum-Dial-labelContainer {\n  margin-bottom: var(--spectrum-global-dimension-size-65);\n}\n\n.spectrum-Dial-label:only-child {\n    text-align: center;\n  }\n\n.spectrum-Dial-controls {\n  width: var(--spectrum-slider-height, var(--spectrum-alias-single-line-height));\n  height: var(--spectrum-slider-height, var(--spectrum-alias-single-line-height));\n  min-height: 0;\n\n  border-radius: var(--spectrum-dial-border-radius, var(--spectrum-alias-border-radius-large));\n  position: relative;\n  display: inline-block;\n  margin: 0;\n\n  box-sizing: border-box;\n  outline: none;\n}\n\n.spectrum-Dial-controls::before,\n  .spectrum-Dial-controls::after {\n    content: '';\n    width: calc(var(--spectrum-slider-tick-mark-width, var(--spectrum-alias-border-size-thick)) * 2);\n    height: var(--spectrum-slider-tick-mark-width, var(--spectrum-alias-border-size-thick));\n    border-radius: var(--spectrum-slider-tick-mark-border-radius, var(--spectrum-alias-border-radius-xsmall));\n    position: absolute;\n    bottom: 0;\n  }\n\n.spectrum-Dial-controls::before {\n    left: auto;\n    right: calc(var(--spectrum-slider-tick-mark-width, var(--spectrum-alias-border-size-thick)) * -1);\n    transform: rotate(var(--spectrum-dial-min-max-tick-angles, 45deg));\n  }\n\n.spectrum-Dial-controls::after {\n    left: calc(var(--spectrum-slider-tick-mark-width, var(--spectrum-alias-border-size-thick)) * -1);\n    transform: rotate(calc(-1 * var(--spectrum-dial-min-max-tick-angles, 45deg)));\n  }\n\n.spectrum-Dial-handle {\n  width: 100%;\n  height: 100%;\n  border-width: var(--spectrum-slider-handle-border-size, var(--spectrum-alias-border-size-thick));\n  box-shadow: none;\n  position: absolute;\n  top: var(--spectrum-global-dimension-size-100);\n  left: var(--spectrum-global-dimension-size-100);\n  right: var(--spectrum-global-dimension-size-100);\n  bottom: var(--spectrum-global-dimension-size-100);\n  border-radius: var(--spectrum-dial-border-radius, var(--spectrum-alias-border-radius-large));\n  transform: rotate(calc(-1 * var(--spectrum-dial-min-max-tick-angles, 45deg)));\n  cursor: pointer;\n  cursor: grab;\n\n  transition: background-color var(--spectrum-slider-animation-duration, var(--spectrum-global-animation-duration-100)) ease-in-out;\n}\n\n.spectrum-Dial-handle::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: calc(var(--spectrum-slider-tick-mark-width, var(--spectrum-alias-border-size-thick)) * -1);\n    width: var(--spectrum-dial-handle-marker-width, 12px);\n    height: var(--spectrum-dial-handle-marker-height, var(--spectrum-alias-border-size-thick));\n    border-radius: var(--spectrum-dial-handle-marker-border-radius, var(--spectrum-alias-border-radius-xsmall));\n    transform: translateY(-50%);\n    transition: background-color var(--spectrum-slider-animation-duration, var(--spectrum-global-animation-duration-100)) ease-in-out;\n  }\n\n.spectrum-Dial-handle:active,\n  .spectrum-Dial-handle.is-focused,\n  .spectrum-Dial-handle.is-dragged {\n    border-width: var(--spectrum-slider-handle-border-size, var(--spectrum-alias-border-size-thick));\n    cursor: ns-resize;\n    cursor: grabbing;\n  }\n\n.spectrum-Dial-input {\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n\n.spectrum-Dial--small .spectrum-Dial-controls {\n    width: var(--spectrum-dial-small-width, var(--spectrum-global-dimension-static-size-300));\n    height: var(--spectrum-dial-small-height, var(--spectrum-global-dimension-static-size-300));\n  }\n\n.spectrum-Slider.is-disabled, .spectrum-Dial.is-disabled {\n    cursor: default;\n  }\n\n.spectrum-Slider.is-disabled .spectrum-Slider-handle,\n.spectrum-Dial.is-disabled .spectrum-Slider-handle,\n.spectrum-Slider.is-disabled .spectrum-Dial-handle,\n.spectrum-Dial.is-disabled .spectrum-Dial-handle {\n      cursor: default;\n      pointer-events: none;\n    }\n\n.spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Slider-handle:hover,\n.spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Slider-handle:active,\n.spectrum-Dial.is-disabled.spectrum-Slider--color .spectrum-Slider-handle:hover,\n.spectrum-Dial.is-disabled.spectrum-Slider--color .spectrum-Slider-handle:active,\n.spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Dial-handle:hover,\n.spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Dial-handle:active,\n.spectrum-Dial.is-disabled.spectrum-Slider--color .spectrum-Dial-handle:hover,\n.spectrum-Dial.is-disabled.spectrum-Slider--color .spectrum-Dial-handle:active {\n          border-width: var(--spectrum-slider-color-handle-outset-border-size, var(--spectrum-alias-border-size-thin));\n        }\n\n.u-isGrabbing {\n  cursor: ns-resize;\n  cursor: grabbing;\n\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.u-isGrabbing .spectrum-Dial .spectrum-Dial-label,\n    .u-isGrabbing .spectrum-Dial .spectrum-Dial-value {\n      cursor: inherit;\n    }\n\n.u-isGrabbing .spectrum-Slider .spectrum-Slider-label,\n.u-isGrabbing .spectrum-Slider .spectrum-Slider-value,\n.u-isGrabbing .spectrum-Dial .spectrum-Slider-label,\n.u-isGrabbing .spectrum-Dial .spectrum-Slider-value {\n      cursor: inherit;\n    }\n\n.spectrum-Slider-track::before {\n    background: var(--spectrum-slider-track-color, var(--spectrum-global-color-gray-300));\n  }\n\n.spectrum-Slider-labelContainer,\n.spectrum-Dial-labelContainer {\n  color: var(--spectrum-label-text-color, var(--spectrum-alias-label-text-color));\n}\n\n.spectrum-Slider--filled .spectrum-Slider-track:first-child::before {\n      background: var(--spectrum-slider-fill-track-color, var(--spectrum-global-color-gray-700));\n    }\n\n.spectrum-Slider-fill::before {\n    background: var(--spectrum-slider-fill-track-color, var(--spectrum-global-color-gray-700));\n  }\n\n.spectrum-Slider-buffer::before,\n  .spectrum-Slider-buffer::after {\n    background: var(--spectrum-slider-player-track-buffer-color, var(--spectrum-global-color-gray-500));\n  }\n\n.spectrum-Slider-ramp path {\n    fill: var(--spectrum-slider-track-color, var(--spectrum-global-color-gray-300));\n  }\n\n.spectrum-Slider-handle,\n.spectrum-Dial-handle {\n  border-color: var(--spectrum-slider-handle-border-color, var(--spectrum-global-color-gray-700));\n  background: var(--spectrum-alias-background-color-default, var(--spectrum-global-color-gray-100));\n}\n\n.spectrum-Slider-handle:hover,\n.spectrum-Dial-handle:hover {\n    border-color: var(--spectrum-slider-handle-border-color-hover, var(--spectrum-global-color-gray-800));\n  }\n\n.spectrum-Slider-handle.is-focused {\n    border-color: var(--spectrum-slider-handle-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n  }\n\n.spectrum-Slider-handle:active,\n.spectrum-Slider-handle.is-dragged,\n.spectrum-Dial-handle:active {\n    border-color: var(--spectrum-slider-handle-border-color-down, var(--spectrum-global-color-gray-800));\n  }\n\n.spectrum-Slider--ramp .spectrum-Slider-handle,\n.spectrum-Slider--ramp .spectrum-Dial-handle {\n    box-shadow: 0 0 0 4px var(--spectrum-alias-background-color-default, var(--spectrum-global-color-gray-100));\n  }\n\n.spectrum-Slider-input,\n.spectrum-Dial-input {\n  background: transparent;\n}\n\n.spectrum-Slider-tick:after {\n    background-color: var(--spectrum-slider-tick-mark-color, var(--spectrum-alias-track-color-default));\n  }\n\n.spectrum-Slider-handle.is-focused {\n    border-color: var(--spectrum-slider-handle-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n    background: var(--spectrum-slider-handle-background-color-key-focus, var(--spectrum-alias-border-color-focus));\n  }\n\n.spectrum-Slider-handle.is-dragged {\n    border-color: var(--spectrum-slider-handle-border-color-down, var(--spectrum-global-color-gray-800));\n    background: var(--spectrum-slider-handle-background-color-down, var(--spectrum-alias-background-color-transparent));\n  }\n\n.spectrum-Slider--range .spectrum-Slider-track:not(:first-of-type):not(:last-of-type):before {\n        background: var(--spectrum-slider-fill-track-color, var(--spectrum-global-color-gray-700));\n      }\n\n.spectrum-Slider--color .spectrum-Slider-controls::before,\n.spectrum-Slider--color .spectrum-Dial-controls::before {\n    background-color: var(--spectrum-global-color-static-white, rgb(255, 255, 255));\n    background-image:\n      linear-gradient(-45deg, transparent 75.5%, var(--spectrum-global-color-static-gray-500, rgb(188, 188, 188)) 75.5%),\n      linear-gradient(45deg, transparent 75.5%, var(--spectrum-global-color-static-gray-500, rgb(188, 188, 188)) 75.5%),\n      linear-gradient(-45deg, var(--spectrum-global-color-static-gray-500, rgb(188, 188, 188)) 25.5%, transparent 25.5%),\n      linear-gradient(45deg, var(--spectrum-global-color-static-gray-500, rgb(188, 188, 188)) 25.5%, transparent 25.5%);\n    background-size:\n      var(--spectrum-global-dimension-static-size-200, 16px)\n      var(--spectrum-global-dimension-static-size-200, 16px);\n    background-position:\n      0 0,\n      0 var(--spectrum-global-dimension-static-size-100, 8px),\n      var(--spectrum-global-dimension-static-size-100, 8px) calc(-1 * var(--spectrum-global-dimension-static-size-100, 8px)),\n      calc(-1 * var(--spectrum-global-dimension-static-size-100, 8px)) 0;\n    z-index: 0;\n  }\n\n.spectrum-Slider--color .spectrum-Slider-track {\n    background-color: transparent;\n    background-image: linear-gradient(to right, var(--spectrum-slider-color-track-background-color-gradient-start, var(--spectrum-global-color-blue-400)), var(--spectrum-slider-color-track-background-color-gradient-end, var(--spectrum-global-color-blue-700)));\n    box-shadow: inset 0 0 0 1px var(--spectrum-slider-color-track-border-color, var(--spectrum-alias-border-color-translucent-dark));\n  }\n\n.spectrum-Slider--color .spectrum-Slider-track::before {\n      display: none;\n    }\n\n.spectrum-Slider--color .spectrum-Slider-handle,\n.spectrum-Slider--color .spectrum-Dial-handle {\n    box-shadow: inset 0 0 0 1px var(--spectrum-slider-color-handle-inset-border-color, var(--spectrum-alias-border-color-translucent-dark)), 0 0 0 1px var(--spectrum-slider-color-handle-outset-border-color, var(--spectrum-alias-border-color-translucent-dark));\n    border-color: var(--spectrum-slider-color-handle-border-color, var(--spectrum-global-color-gray-50));\n    background: var(--spectrum-slider-color-handle-color, var(--spectrum-alias-border-color-transparent));\n  }\n\n.spectrum-Slider--color .spectrum-Slider-handle.is-focused {\n      box-shadow: 0 0 0 1px var(--spectrum-slider-color-handle-outset-border-color-key-focus, var(--spectrum-alias-border-color-translucent-dark));\n    }\n\n.spectrum-Dial-handle {\n  box-shadow: none;\n}\n\n.spectrum-Dial-handle::after {\n    background-color: var(--spectrum-dial-handle-marker-color, var(--spectrum-global-color-gray-700));\n  }\n\n.spectrum-Dial-handle:hover::after {\n      background-color: var(--spectrum-dial-handle-marker-color-hover, var(--spectrum-global-color-gray-800));\n    }\n\n.spectrum-Dial-handle.is-focused {\n    background-color: var(--spectrum-slider-handle-background-color-key-focus, var(--spectrum-alias-border-color-focus));\n\n    border-color: var(--spectrum-slider-handle-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n  }\n\n.spectrum-Dial-handle.is-focused::after {\n      background-color: var(--spectrum-dial-handle-marker-color-key-focus, var(--spectrum-global-color-gray-50));\n    }\n\n.spectrum-Dial-handle:active,\n  .spectrum-Dial-handle.is-dragged {\n    background-color: var(--spectrum-dial-border-color-hover, var(--spectrum-global-color-gray-800));\n\n    border-color: var(--spectrum-slider-handle-border-color-down, var(--spectrum-global-color-gray-800));\n  }\n\n.spectrum-Dial-handle:active::after, .spectrum-Dial-handle.is-dragged::after {\n      background-color: var(--spectrum-dial-handle-marker-color-key-focus, var(--spectrum-global-color-gray-50));\n    }\n\n.spectrum-Dial-controls::before,\n  .spectrum-Dial-controls::after {\n    background-color: var(--spectrum-dial-min-max-tick-color, var(--spectrum-global-color-gray-600));\n  }\n\n.spectrum-Dial.is-disabled .spectrum-Dial-labelContainer {\n      color: var(--spectrum-label-text-color-disabled, var(--spectrum-alias-text-color-disabled));\n    }\n\n.spectrum-Dial.is-disabled .spectrum-Dial-controls::after,\n      .spectrum-Dial.is-disabled .spectrum-Dial-controls::before {\n        background-color: var(--spectrum-slider-handle-border-color-disabled, var(--spectrum-global-color-gray-400));\n      }\n\n.spectrum-Dial.is-disabled .spectrum-Dial-handle {\n      border-color: var(--spectrum-slider-handle-border-color-disabled, var(--spectrum-global-color-gray-400));\n      background: var(--spectrum-alias-background-color-default, var(--spectrum-global-color-gray-100));\n    }\n\n.spectrum-Dial.is-disabled .spectrum-Dial-handle:hover,\n      .spectrum-Dial.is-disabled .spectrum-Dial-handle:active {\n        border-color: var(--spectrum-slider-handle-border-color-disabled, var(--spectrum-global-color-gray-400));\n        background: var(--spectrum-slider-handle-background-color, var(--spectrum-alias-background-color-transparent));\n      }\n\n.spectrum-Dial.is-disabled .spectrum-Dial-handle::after,\n      .spectrum-Dial.is-disabled .spectrum-Dial-handle::before {\n        background-color: var(--spectrum-slider-track-color-disabled, var(--spectrum-global-color-gray-300));\n      }\n\n.spectrum-Slider.is-disabled .spectrum-Slider-labelContainer,\n.spectrum-Slider.is-disabled .spectrum-Dial-labelContainer {\n      color: var(--spectrum-label-text-color-disabled, var(--spectrum-alias-text-color-disabled));\n    }\n\n.spectrum-Slider.is-disabled .spectrum-Slider-handle,\n.spectrum-Slider.is-disabled .spectrum-Dial-handle {\n      border-color: var(--spectrum-slider-handle-border-color-disabled, var(--spectrum-global-color-gray-400));\n      background: var(--spectrum-alias-background-color-default, var(--spectrum-global-color-gray-100));\n    }\n\n.spectrum-Slider.is-disabled .spectrum-Slider-handle:hover,\n.spectrum-Slider.is-disabled .spectrum-Slider-handle:active,\n.spectrum-Slider.is-disabled .spectrum-Dial-handle:hover,\n.spectrum-Slider.is-disabled .spectrum-Dial-handle:active {\n        border-color: var(--spectrum-slider-handle-border-color-disabled, var(--spectrum-global-color-gray-400));\n        background: var(--spectrum-slider-handle-background-color, var(--spectrum-alias-background-color-transparent));\n      }\n\n.spectrum-Slider.is-disabled .spectrum-Slider-track::before {\n        background: var(--spectrum-slider-track-color-disabled, var(--spectrum-global-color-gray-300));\n      }\n\n.spectrum-Slider.is-disabled.spectrum-Slider--filled .spectrum-Slider-track:first-child::before {\n          background: var(--spectrum-slider-fill-track-color-disabled, var(--spectrum-global-color-gray-300));\n        }\n\n.spectrum-Slider.is-disabled .spectrum-Slider-fill::before {\n        background: var(--spectrum-slider-fill-track-color-disabled, var(--spectrum-global-color-gray-300));\n      }\n\n.spectrum-Slider.is-disabled .spectrum-Slider-buffer::before {\n        background: var(--spectrum-slider-player-track-buffer-color-disabled, var(--spectrum-alias-track-color-default));\n      }\n\n.spectrum-Slider.is-disabled .spectrum-Slider-ramp path {\n        fill: var(--spectrum-slider-ramp-track-color-disabled, var(--spectrum-global-color-gray-200));\n      }\n\n.spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Slider-track {\n        background: var(--spectrum-slider-color-track-color-disabled, var(--spectrum-global-color-gray-200)) !important;\n        box-shadow: none;\n      }\n\n.spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Slider-handle,\n.spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Dial-handle {\n        background: var(--spectrum-slider-color-handle-color-disabled, var(--spectrum-alias-border-color-transparent));\n        box-shadow: none;\n        border-color: var(--spectrum-slider-color-handle-border-color-disabled, var(--spectrum-global-color-gray-400));\n      }\n\n.spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Slider-handle:hover,\n.spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Slider-handle:active,\n.spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Dial-handle:hover,\n.spectrum-Slider.is-disabled.spectrum-Slider--color .spectrum-Dial-handle:active {\n          background: var(--spectrum-slider-color-handle-color-disabled, var(--spectrum-alias-border-color-transparent));\n          box-shadow: none;\n          border-color: var(--spectrum-slider-color-handle-border-color-disabled, var(--spectrum-global-color-gray-400));\n        }\n\n.spectrum-Slider.is-disabled.spectrum-Slider--range .spectrum-Slider-track:not(:first-of-type):not(:last-of-type):before {\n            background: var(--spectrum-slider-fill-track-color-disabled, var(--spectrum-global-color-gray-300));\n          }\n",devDependencies:{"@spectrum-css/component-builder":"^1.0.0","@spectrum-css/vars":"^2.0.0",gulp:"^4.0.0"},packageVersion:"2.0.0",packageName:"@spectrum-css/slider",peerCSS:""}];r.exports=a.length<=1?a[0]:a}}]);