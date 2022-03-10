import e,{useState as n}from"react";
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
***************************************************************************** */function o(e,n){void 0===n&&(n={});var o=n.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var t="index-module_root__zxxgb";o(".index-module_root__zxxgb {\n  color: #fff;\n  border: 0;\n  line-height: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  padding: 12px 24px;\n  border-radius: 6px;\n  font-size: 1.25em;\n  line-height: 1.5em;\n  font-weight: 500;\n}\n");const r=o=>{var{color:r="black",colorHover:i="black",background:d="#ed3f78",backgroundHover:a="#cb2e71",padding:c="12px 24px",fontSize:l=16,isActive:s=!1}=o,p=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]])}return o}(o,["color","colorHover","background","backgroundHover","padding","fontSize","isActive"]);const[f,u]=n(!1);return e.createElement("button",Object.assign({},p,{className:t,style:{fontSize:l,padding:c,color:f||s?i:r,background:f||s?a:d},onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1)}))};var i="index-module_root__ETPj0";o(".index-module_root__ETPj0 {\n  padding: 15px;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.37;\n  letter-spacing: -0.4px;\n  color: #262b52;\n  border-radius: 3px;\n  border: 1px solid #dbdcff;\n  background-color: #fff;\n  outline: 0 !important;\n  box-shadow: none;\n  border-color: #aaafff;\n}\n");const d=n=>e.createElement("input",Object.assign({},n,{className:i}));export{r as Button,d as Input};
//# sourceMappingURL=index.js.map
