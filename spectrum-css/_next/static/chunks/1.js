(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./data/yml/accordion.yml":
/*!********************************!*\
  !*** ./data/yml/accordion.yml ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const doc = [({"name":"Accordion", "description":"While remaining backward compatible, the recommended markup has been updated to implement the [WAI-ARIA 1.1 Accordion design pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) to better support accessibility for keyboard and screen reader users.", "examples":[({"id":"accordion", "name":"Standard", "markup":"<!-- WAI-ARIA 1.1: Accordion container role changed from \"tablist\" to \"region\" -->\n<div class=\"spectrum-Accordion\" role=\"region\">\n  <div class=\"spectrum-Accordion-item is-open\" role=\"presentation\">\n\n    <!-- WAI-ARIA 1.1: Item header is a <button> wrapped within a <h3> element, rather than a <div> element with role=\"tab\" -->\n    <h3 class=\"spectrum-Accordion-itemHeading\">\n      <!-- WAI-ARIA 1.1: Item header <button> uses aria-expanded attribute to indicate expanded state. -->\n      <button class=\"spectrum-Accordion-itemHeader\" type=\"button\" id=\"spectrum-accordion-item-0-header\" aria-controls=\"spectrum-accordion-item-0-content\" aria-expanded=\"true\">Recent</button>\n      <svg class=\"spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-Accordion-itemIndicator\" focusable=\"false\" aria-hidden=\"true\">\n        <use xlink:href=\"#spectrum-css-icon-ChevronRightMedium\" />\n      </svg>\n    </h3>\n\n    <!-- WAI-ARIA 1.1: Item content role changed from \"tabpanel\" to \"region\" -->\n    <div class=\"spectrum-Accordion-itemContent\" role=\"region\" id=\"spectrum-accordion-item-0-content\" aria-labelledby=\"spectrum-accordion-item-0-header\">Item 1</div>\n  </div>\n  <div class=\"spectrum-Accordion-item is-disabled\" role=\"presentation\">\n    <h3 class=\"spectrum-Accordion-itemHeading\">\n      <button class=\"spectrum-Accordion-itemHeader\" type=\"button\" disabled id=\"spectrum-accordion-item-1-header\" aria-controls=\"spectrum-accordion-item-1-content\" aria-expanded=\"false\">Architecture</button>\n      <svg class=\"spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-Accordion-itemIndicator\" focusable=\"false\" aria-hidden=\"true\">\n        <use xlink:href=\"#spectrum-css-icon-ChevronRightMedium\" />\n      </svg>\n    </h3>\n    <div class=\"spectrum-Accordion-itemContent\" role=\"region\" id=\"spectrum-accordion-item-1-content\" aria-labelledby=\"spectrum-accordion-item-1-header\">Item 2</div>\n  </div>\n  <div class=\"spectrum-Accordion-item\" role=\"presentation\">\n    <h3 class=\"spectrum-Accordion-itemHeading\">\n      <button class=\"spectrum-Accordion-itemHeader\" type=\"button\" id=\"spectrum-accordion-item-2-header\" aria-controls=\"spectrum-accordion-item-2-content\" aria-expanded=\"false\">Nature</button>\n      <svg class=\"spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-Accordion-itemIndicator\" focusable=\"false\" aria-hidden=\"true\">\n        <use xlink:href=\"#spectrum-css-icon-ChevronRightMedium\" />\n      </svg>\n    </h3>\n    <div class=\"spectrum-Accordion-itemContent\" role=\"region\" id=\"spectrum-accordion-item-2-content\" aria-labelledby=\"spectrum-accordion-item-2-header\">Item 3</div>\n  </div>\n  <div class=\"spectrum-Accordion-item\" role=\"presentation\">\n    <h3 class=\"spectrum-Accordion-itemHeading\">\n      <button class=\"spectrum-Accordion-itemHeader\" type=\"button\" id=\"spectrum-accordion-item-3-header\" aria-controls=\"spectrum-accordion-item-3-content\" aria-expanded=\"false\">Really Long Accordion Item According to Our Predictions</button>\n      <svg class=\"spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-Accordion-itemIndicator\" focusable=\"false\" aria-hidden=\"true\">\n        <use xlink:href=\"#spectrum-css-icon-ChevronRightMedium\" />\n      </svg>\n    </h3>\n    <div class=\"spectrum-Accordion-itemContent\" role=\"region\" id=\"spectrum-accordion-item-3-content\" aria-labelledby=\"spectrum-accordion-item-3-header\">Item 4</div>\n  </div>\n</div>\n"})], "packageSlug":"accordion", "indexCSS":".spectrum-Accordion {\n  display: block;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.spectrum-Accordion-itemIndicator {\n  display: block;\n\n  position: absolute;\n  left: var(--spectrum-accordion-icon-spacing, 16px);\n  top: calc((var(--spectrum-accordion-item-height, 40px) - var(--spectrum-accordion-item-border-size, var(--spectrum-alias-border-size-thin))) / 2 - 5px);\n\n  transition: transform ease var(--spectrum-global-animation-duration-100, 130ms);\n}\n\n.spectrum-Accordion-item {\n  z-index: inherit;\n  position: relative;\n\n  display: list-item;\n  margin: 0;\n\n  border-bottom: var(--spectrum-accordion-item-border-size, var(--spectrum-alias-border-size-thin)) solid transparent;\n}\n\n.spectrum-Accordion-item:first-of-type {\n    border-top: var(--spectrum-accordion-item-border-size, var(--spectrum-alias-border-size-thin)) solid transparent;\n  }\n\n.spectrum-Accordion-itemHeading {\n  margin: 0;\n}\n\n.spectrum-Accordion-itemHeader {\n  position: relative;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n\n  box-sizing: border-box;\n  padding: var(--spectrum-global-dimension-size-150) var(--spectrum-accordion-item-padding, 16px) var(--spectrum-global-dimension-size-150) calc(var(--spectrum-accordion-item-padding, 16px) * 2 + 2px);\n  margin: 0;\n\n  min-height: calc(var(--spectrum-accordion-item-height, 40px) - var(--spectrum-accordion-item-border-size, var(--spectrum-alias-border-size-thin)));\n\n  font-size: var(--spectrum-accordion-item-title-text-size, var(--spectrum-global-dimension-font-size-50));\n  line-height: 1.3;\n  text-transform: uppercase;\n  letter-spacing: calc(var(--spectrum-accordion-item-title-tracking, var(--spectrum-global-font-letter-spacing-medium)) / 100);\n\n  text-overflow: ellipsis;\n  cursor: pointer;\n  font-weight: 500;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: inherit;\n  border: 0;\n  font-family: inherit;\n  text-align: start;\n  width: 100%;\n}\n\n.spectrum-Accordion-itemHeader:focus {\n    outline: none;\n  }\n\n.spectrum-Accordion-itemHeader:focus::after {\n      content: '';\n\n      position: absolute;\n      left: 0;\n      top: calc(-1 * var(--spectrum-accordion-item-border-size, var(--spectrum-alias-border-size-thin)));\n      bottom: calc(-1 * var(--spectrum-accordion-item-border-size, var(--spectrum-alias-border-size-thin)));\n\n      width: var(--spectrum-accordion-item-border-size-key-focus, 2px);\n    }\n\n.spectrum-Accordion-itemContent {\n  padding: 0 var(--spectrum-accordion-item-content-padding, var(--spectrum-global-dimension-size-200)) var(--spectrum-accordion-item-content-padding, var(--spectrum-global-dimension-size-200)) var(--spectrum-accordion-item-content-padding, var(--spectrum-global-dimension-size-200));\n  display: none;\n}\n\n.spectrum-Accordion-item.is-open > .spectrum-Accordion-itemHeading > .spectrum-Accordion-itemIndicator {\n        transform: rotate(90deg);\n      }\n\n.spectrum-Accordion-item.is-open > .spectrum-Accordion-itemIndicator {\n      transform: rotate(90deg);\n    }\n\n.spectrum-Accordion-item.is-open > .spectrum-Accordion-itemHeader::after {\n      height: calc(var(--spectrum-accordion-item-height, 40px) - var(--spectrum-accordion-item-border-size, var(--spectrum-alias-border-size-thin)));\n    }\n\n.spectrum-Accordion-item.is-open > .spectrum-Accordion-itemContent {\n      display: block;\n    }\n\n.spectrum-Accordion-item.is-disabled .spectrum-Accordion-itemHeader {\n      cursor: default;\n    }\n\n.spectrum-Accordion-item {\n  border-color: var(--spectrum-accordion-border-color, var(--spectrum-global-color-gray-300));\n}\n\n.spectrum-Accordion-itemIndicator {\n  color: var(--spectrum-accordion-icon-color, var(--spectrum-global-color-gray-600));\n}\n\n.spectrum-Accordion-itemHeader {\n  color: var(--spectrum-accordion-text-color, var(--spectrum-global-color-gray-700));\n}\n\n.spectrum-Accordion-itemHeader:hover {\n    color: var(--spectrum-accordion-text-color-hover, var(--spectrum-global-color-gray-900));\n\n    background-color: var(--spectrum-accordion-background-color-hover, var(--spectrum-global-color-gray-200));\n  }\n\n.spectrum-Accordion-itemHeader:hover + .spectrum-Accordion-itemIndicator {\n      color: var(--spectrum-accordion-icon-color-hover, var(--spectrum-global-color-gray-800));\n    }\n\n.spectrum-Accordion-itemHeader.focus-ring:after  {\n      background-color: var(--spectrum-accordion-border-left-color-key-focus, var(--spectrum-alias-border-color-focus));\n    }\n\n.spectrum-Accordion-item.is-open .spectrum-Accordion-itemHeader:hover {\n        background-color: transparent;\n      }\n\n.spectrum-Accordion-item.is-disabled .spectrum-Accordion-itemHeader,\n    .spectrum-Accordion-item.is-disabled .spectrum-Accordion-itemHeader:hover,\n    .spectrum-Accordion-item.is-disabled .spectrum-Accordion-itemHeader.focus-ring {\n      color: var(--spectrum-accordion-text-color-disabled, var(--spectrum-global-color-gray-500));\n      background-color: transparent;\n    }\n\n.spectrum-Accordion-item.is-disabled .spectrum-Accordion-itemHeader + .spectrum-Accordion-itemIndicator {\n      color: var(--spectrum-accordion-icon-color-disabled, var(--spectrum-global-color-gray-400));\n    }\n", "devDependencies":({"@spectrum-css/component-builder":"^1.0.0", "@spectrum-css/icon":"^2.0.0", "@spectrum-css/vars":"^2.0.0", "gulp":"^4.0.0"}), "packageVersion":"2.0.0", "packageName":"@spectrum-css/accordion", "peerCSS":".spectrum-Icon,\n.spectrum-UIIcon {\n  display: inline-block;\n  color: inherit;\n  fill: currentColor;\n  pointer-events: none;\n}\n\n.spectrum-Icon:not(:root), .spectrum-UIIcon:not(:root) {\n    overflow: hidden;\n  }\n\n.spectrum-Icon--sizeXXS,\n  .spectrum-Icon--sizeXXS img,\n  .spectrum-Icon--sizeXXS svg {\n    height: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) / 2);\n    width: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) / 2);\n  }\n\n.spectrum-Icon--sizeXS,\n  .spectrum-Icon--sizeXS img,\n  .spectrum-Icon--sizeXS svg {\n    height: calc(var(--spectrum-global-dimension-size-300) / 2);\n    width: calc(var(--spectrum-global-dimension-size-300) / 2);\n  }\n\n.spectrum-Icon--sizeS,\n  .spectrum-Icon--sizeS img,\n  .spectrum-Icon--sizeS svg {\n    height: var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225));\n    width: var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225));\n  }\n\n.spectrum-Icon--sizeM,\n  .spectrum-Icon--sizeM img,\n  .spectrum-Icon--sizeM svg {\n    height: var(--spectrum-global-dimension-size-300);\n    width: var(--spectrum-global-dimension-size-300);\n  }\n\n.spectrum-Icon--sizeL,\n  .spectrum-Icon--sizeL img,\n  .spectrum-Icon--sizeL svg {\n    height: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) * 2);\n    width: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) * 2);\n  }\n\n.spectrum-Icon--sizeXL,\n  .spectrum-Icon--sizeXL img,\n  .spectrum-Icon--sizeXL svg {\n    height: calc(var(--spectrum-global-dimension-size-300) * 2);\n    width: calc(var(--spectrum-global-dimension-size-300) * 2);\n  }\n\n.spectrum-Icon--sizeXXL,\n  .spectrum-Icon--sizeXXL img,\n  .spectrum-Icon--sizeXXL svg {\n    height: calc(var(--spectrum-global-dimension-size-300) * 3);\n    width: calc(var(--spectrum-global-dimension-size-300) * 3);\n  }\n\n.spectrum--medium .spectrum-UIIcon--large {\n    display: none;\n  }\n\n.spectrum--medium .spectrum-UIIcon--medium {\n    display: inline;\n  }\n\n.spectrum--large .spectrum-UIIcon--medium {\n    display: none;\n  }\n\n.spectrum--large .spectrum-UIIcon--large {\n    display: inline;\n  }\n\n.spectrum--large {\n  --ui-icon-large-display: block;\n  --ui-icon-medium-display: none;\n}\n\n.spectrum--medium {\n  --ui-icon-medium-display: block;\n  --ui-icon-large-display: none;\n}\n\n.spectrum-UIIcon--large {\n  display: var(--ui-icon-large-display);\n}\n\n.spectrum-UIIcon--medium {\n  display: var(--ui-icon-medium-display);\n}\n\n.spectrum-UIIcon-AlertMedium {\n  width: var(--spectrum-icon-alert-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-alert-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-AlertSmall {\n  width: var(--spectrum-icon-alert-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-alert-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-ArrowDownSmall {\n  width: var(--spectrum-icon-arrow-down-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-arrow-down-small-height);\n}\n\n.spectrum-UIIcon-ArrowLeftMedium {\n  width: var(--spectrum-icon-arrow-left-medium-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-arrow-left-medium-height);\n}\n\n.spectrum-UIIcon-Asterisk {\n  width: var(--spectrum-fieldlabel-asterisk-size, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-fieldlabel-asterisk-size, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-CheckmarkMedium {\n  width: var(--spectrum-icon-checkmark-medium-width);\n  height: var(--spectrum-icon-checkmark-medium-height);\n}\n\n.spectrum-UIIcon-CheckmarkSmall {\n  width: var(--spectrum-icon-checkmark-small-width);\n  height: var(--spectrum-icon-checkmark-small-height);\n}\n\n.spectrum-UIIcon-ChevronDownMedium {\n  width: var(--spectrum-icon-chevron-down-medium-width);\n  height: var(--spectrum-icon-chevron-down-medium-height, var(--spectrum-global-dimension-size-75));\n}\n\n.spectrum-UIIcon-ChevronDownSmall {\n  width: var(--spectrum-icon-chevron-down-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-chevron-down-small-height, var(--spectrum-global-dimension-size-75));\n}\n\n.spectrum-UIIcon-ChevronLeftLarge {\n  width: var(--spectrum-icon-chevron-left-large-width);\n  height: var(--spectrum-icon-chevron-left-large-height, var(--spectrum-global-dimension-size-200));\n}\n\n.spectrum-UIIcon-ChevronLeftMedium {\n  width: var(--spectrum-icon-chevron-left-medium-width, var(--spectrum-global-dimension-size-75));\n  height: var(--spectrum-icon-chevron-left-medium-height);\n}\n\n.spectrum-UIIcon-ChevronRightLarge {\n  width: var(--spectrum-icon-chevron-right-large-width);\n  height: var(--spectrum-icon-chevron-right-large-height, var(--spectrum-global-dimension-size-200));\n}\n\n.spectrum-UIIcon-ChevronRightMedium {\n  width: var(--spectrum-icon-chevron-right-medium-width, var(--spectrum-global-dimension-size-75));\n  height: var(--spectrum-icon-chevron-right-medium-height);\n}\n\n.spectrum-UIIcon-ChevronRightSmall {\n  width: var(--spectrum-icon-chevron-right-small-width, var(--spectrum-global-dimension-size-75));\n  height: var(--spectrum-icon-chevron-right-small-height, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-ChevronUpSmall {\n  width: var(--spectrum-icon-chevron-up-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-chevron-up-small-height, var(--spectrum-global-dimension-size-75));\n}\n\n.spectrum-UIIcon-CornerTriangle {\n  width: var(--spectrum-icon-cornertriangle-width, var(--spectrum-global-dimension-size-65));\n  height: var(--spectrum-icon-cornertriangle-height, var(--spectrum-global-dimension-size-65));\n}\n\n.spectrum-UIIcon-CrossLarge {\n  width: var(--spectrum-icon-cross-large-width);\n  height: var(--spectrum-icon-cross-large-height);\n}\n\n.spectrum-UIIcon-CrossMedium {\n  width: var(--spectrum-icon-cross-medium-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-cross-medium-height, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-CrossSmall {\n  width: var(--spectrum-icon-cross-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-cross-small-height, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-DashSmall {\n  width: var(--spectrum-icon-dash-small-width);\n  height: var(--spectrum-icon-dash-small-height);\n}\n\n.spectrum-UIIcon-DoubleGripper {\n  width: var(--spectrum-icon-doublegripper-width, var(--spectrum-global-dimension-size-200));\n  height: var(--spectrum-icon-doublegripper-height, var(--spectrum-global-dimension-size-50));\n}\n\n.spectrum-UIIcon-FolderBreadcrumb {\n  width: var(--spectrum-icon-folderbreadcrumb-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-folderbreadcrumb-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-HelpMedium {\n  width: var(--spectrum-icon-info-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-info-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-HelpSmall {\n  width: var(--spectrum-icon-info-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-info-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-InfoMedium {\n  width: var(--spectrum-icon-info-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-info-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-InfoSmall {\n  width: var(--spectrum-icon-info-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-info-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-Magnifier {\n  width: var(--spectrum-icon-magnifier-width, var(--spectrum-global-dimension-size-200));\n  height: var(--spectrum-icon-magnifier-height, var(--spectrum-global-dimension-size-200));\n}\n\n.spectrum-UIIcon-SkipLeft {\n  width: var(--spectrum-icon-skip-left-width);\n  height: var(--spectrum-icon-skip-left-height);\n}\n\n.spectrum-UIIcon-SkipRight {\n  width: var(--spectrum-icon-skip-right-width);\n  height: var(--spectrum-icon-skip-right-height);\n}\n\n.spectrum-UIIcon-Star {\n  width: var(--spectrum-icon-star-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-star-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-StarOutline {\n  width: var(--spectrum-icon-star-outline-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-star-outline-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-SuccessMedium {\n  width: var(--spectrum-icon-success-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-success-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-SuccessSmall {\n  width: var(--spectrum-icon-success-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-success-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-TripleGripper {\n  width: var(--spectrum-icon-triplegripper-width);\n  height: var(--spectrum-icon-triplegripper-height, var(--spectrum-global-dimension-size-85));\n}\n"})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ })

}]);
//# sourceMappingURL=1.js.map