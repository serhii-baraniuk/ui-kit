"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function o(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var r="index-module_root__zxxgb";o(".index-module_root__zxxgb {\n  color: #fff;\n  border: 0;\n  line-height: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  padding: 12px 24px;\n  border-radius: 6px;\n  font-size: 1.25em;\n  line-height: 1.5em;\n  font-weight: 500;\n}\n");var d="index-module_root__ETPj0";o(".index-module_root__ETPj0 {\n  padding: 15px;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.37;\n  letter-spacing: -0.4px;\n  color: #262b52;\n  border-radius: 3px;\n  border: 1px solid #dbdcff;\n  background-color: #fff;\n  outline: 0 !important;\n  box-shadow: none;\n  border-color: #aaafff;\n}\n");exports.Button=t=>{var{color:o="black",colorHover:d="black",background:i="#ed3f78",backgroundHover:a="#cb2e71",padding:c="12px 24px",fontSize:l=16,isActive:s=!1}=t,u=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(t,["color","colorHover","background","backgroundHover","padding","fontSize","isActive"]);const[p,f]=e.useState(!1);return n.default.createElement("button",Object.assign({},u,{className:r,style:{fontSize:l,padding:c,color:p||s?d:o,background:p||s?a:i},onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1)}))},exports.Input=e=>n.default.createElement("input",Object.assign({},e,{className:d}));
//# sourceMappingURL=index.js.map
